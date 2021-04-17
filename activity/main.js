let request=require("request")
let cheerio=require("cheerio")

let link="https://github.com/topics";
request(link,cb)
function cb(x,y,z)
{
    let aa=cheerio.load(z);
    let bb=aa(".container-lg.p-responsive.mt-6 a.no-underline.d-flex.flex-column.flex-justify-center")
    let cc=aa(".container-lg.p-responsive.mt-6 a.no-underline.d-flex.flex-column.flex-justify-center p")
    function solve(i)
    {
        if(i>=5) return;
        console.log(aa(cc[i]).text());
        let link=aa(bb[i/2]).attr("href");
        link="https://github.com"+link;
        request(link,cb)
        function cb(x,y,z)
        {
            let aa=cheerio.load(z)
            let bb=aa(".px-3 h1.f3.color-text-secondary.text-normal.lh-condensed a")
            for(let i=1;i<=15;i+=2)
            {
                let link="https://github.com"+aa(bb[i]).attr("href");
                console.log(link);
            }
            solve(i+2);
        }
    }
    solve(0);
}