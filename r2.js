const r2=require('r2')
async function man() {
    let html = await r2('http://www.szjs.gov.cn').text
    console.log(html);
}

man();