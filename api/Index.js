export const config = {
runtime: 'edge',
};
‌
export default async function handler(req) {
// آدرس سرور تو با پورت 8040
const upstream = 'https://Faz.jojeyenaz.ir:8040';
‌
const url = new URL(req.url);
const targetUrl = upstream + url.pathname + url.search;
‌
const newRequest = new Request(targetUrl, {
method: req.method,
headers: req.headers,
body: req.body,
redirect: 'follow'
});
‌
try {
return await fetch(newRequest);
} catch (e) {
return new Response('Error: ' + e.message, { status: 500 });
}
}
