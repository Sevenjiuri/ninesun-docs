import{_ as n,c as a,o as p,ae as i}from"./chunks/framework.Dh1jimFm.js";const e="/assets/image.Bm5ocKFt.png",l="/assets/image-2.DEDgjzGw.png",t="/assets/image-1.BguAssdw.png",r="/assets/image-3.DBTRLibX.png",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"opervite/安装ssl证书.md","filePath":"opervite/安装ssl证书.md"}'),c={name:"opervite/安装ssl证书.md"};function o(h,s,k,g,d,F){return p(),a("div",null,s[0]||(s[0]=[i('<p>1.下载</p><ol start="2"><li><p>申请时报错</p></li><li><p><img src="'+e+'" alt="alt text"></p></li><li><p>sudo yum install socat -y</p></li><li><p><img src="'+l+'" alt="alt text"> 得先停掉nginx</p></li><li><p>暂时保存下nginx启动命令</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> nginx: master process /www/server/nginx/sbin/nginx -c /www/server/nginx/conf/nginx.conf</span></span></code></pre></div><p><img src="'+t+`" alt="alt text"> 7.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@VM-4-4-opencloudos .acme.sh]# /root/.acme.sh/acme.sh  --issue  --standalone  -d ninesun.site</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:13:55 PM CST 2025] Using CA: https://acme.zerossl.com/v2/DV90</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:13:55 PM CST 2025] Standalone mode.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:13:55 PM CST 2025] Account key creation OK.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:13:55 PM CST 2025] No EAB credentials found </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZeroSSL, let</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s obtain them</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:13:57 PM CST 2025] Registering account: https://acme.zerossl.com/v2/DV90</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:00 PM CST 2025] Registered</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:00 PM CST 2025] ACCOUNT_THUMBPRINT=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8_hzuI0VuvWCIf_WMK9Pvq471op5Q5zQ1S_FcFsfUls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:00 PM CST 2025] Creating domain key</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:00 PM CST 2025] The domain key is here: /root/.acme.sh/ninesun.site_ecc/ninesun.site.key</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:00 PM CST 2025] Single domain=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ninesun.site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:05 PM CST 2025] Getting webroot for domain=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ninesun.site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:05 PM CST 2025] Verifying: ninesun.site</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:05 PM CST 2025] Standalone mode server</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:09 PM CST 2025] Processing. The CA is processing your order, please wait. (1/30)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:14 PM CST 2025] Success</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:14 PM CST 2025] Verification finished, beginning signing.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:14 PM CST 2025] Let&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s finalize the order.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:14:14 PM CST 2025] Le_OrderFinalize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://acme.zerossl.com/v2/DV90/order/lv_HQNnFk0qPnuMErV4bxg/finalize&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Mon Apr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 03:14:18 PM CST 2025] Order status is </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;processing&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, let</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s sleep and retry.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:18 PM CST 2025] Sleeping for 15 seconds then retrying</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:34 PM CST 2025] Polling order status: https://acme.zerossl.com/v2/DV90/order/lv_HQNnFk0qPnuMErV4bxg</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:40 PM CST 2025] Downloading cert.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:40 PM CST 2025] Le_LinkCert=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://acme.zerossl.com/v2/DV90/cert/Ey19rI3k8_1cjnlAYvOLyQ</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:48 PM CST 2025] Cert success.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-----BEGIN CERTIFICATE-----</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIID+zCCA4GgAwIBAgIRALISOi437e5EuIcxlQAe+7AwCgYIKoZIzj0EAwMwSzEL</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MAkGA1UEBhMCQVQxEDAOBgNVBAoTB1plcm9TU0wxKjAoBgNVBAMTIVplcm9TU0wg</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RUNDIERvbWFpbiBTZWN1cmUgU2l0ZSBDQTAeFw0yNTA0MTQwMDAwMDBaFw0yNTA3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MTMyMzU5NTlaMBcxFTATBgNVBAMTDG5pbmVzdW4uc2l0ZTBZMBMGByqGSM49AgEG</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CCqGSM49AwEHA0IABFCFpLMHNsW9PHydzOdHrd0jSi6WFO5MTJsQn74JBQLwLrhj</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fpmOyOkeVpIX3QrQHSo8sPwEncmXtvFlo2RwDuyjggJ4MIICdDAfBgNVHSMEGDAW</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gBQPa+ZLzjlHrvZ+kB558DCRkshfozAdBgNVHQ4EFgQU63tRcL5/4Wy+kSI1+wei</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">F2PjLlYwDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYI</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">KwYBBQUHAwEGCCsGAQUFBwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAk4wJTAj</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BggrBgEFBQcCARYXaHR0cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGI</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BggrBgEFBQcBAQR8MHowSwYIKwYBBQUHMAKGP2h0dHA6Ly96ZXJvc3NsLmNydC5z</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZWN0aWdvLmNvbS9aZXJvU1NMRUNDRG9tYWluU2VjdXJlU2l0ZUNBLmNydDArBggr</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BgEFBQcwAYYfaHR0cDovL3plcm9zc2wub2NzcC5zZWN0aWdvLmNvbTCCAQQGCisG</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AQQB1nkCBAIEgfUEgfIA8AB1AN3cyjSV1+EWBeeVMvrHn/g9HFDf2wA6FBJ2Ciys</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">u8gqAAABljMmJs0AAAQDAEYwRAIgK3i90gFR5fos0oeiP3uYzwKigpx3/UA5qxfT</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BUMshKkCIEDrt6h/sIBeNLOrIeXvxD3AgkP2eJBabBhqpaJGJ5M2AHcADeHyMCvT</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DcFAYhIJ6lUu/Ed0fLHX6TDvDkIetH5OqjQAAAGWMyYmrwAABAMASDBGAiEApLwv</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">So3yow2CocTYIGoH6nm8gHxG5WvtLTHNRkNKu6gCIQCHd1Z8Rg3A47lcweUVToTI</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EV25nqu3Xj5LG0gEafrPHDAXBgNVHREEEDAOggxuaW5lc3VuLnNpdGUwCgYIKoZI</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">zj0EAwMDaAAwZQIxALMSj9PAuw0FGWNvk1lCszpFZrhyKgWMhC6xd2msbGiDSfQK</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb6nMUClEF4YhAiZaAIweZ48ZCFhLHZMa9mBwoncXbMnEK+IeoHXffXoTDnQiSJJ</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TIN0VRqN2Y/45VvvOaDd</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-----END CERTIFICATE-----</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:48 PM CST 2025] Your cert is in: /root/.acme.sh/ninesun.site_ecc/ninesun.site.cer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:48 PM CST 2025] Your cert key is in: /root/.acme.sh/ninesun.site_ecc/ninesun.site.key</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:48 PM CST 2025] The intermediate CA cert is in: /root/.acme.sh/ninesun.site_ecc/ca.cer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Mon Apr 14 03:14:48 PM CST 2025] And the full-chain cert is in: /root/.acme.sh/ninesun.site_ecc/fullchain.cer</span></span></code></pre></div><ol start="8"><li>问下ai怎么改nginx 配置文件 改成这样了</li></ol><p>但是页面上还是显示不安全。。。 可以用ssl访问了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>user  www www;</span></span>
<span class="line"><span>worker_processes auto;</span></span>
<span class="line"><span>error_log  /www/wwwlogs/nginx_error.log  crit;</span></span>
<span class="line"><span>pid        /www/server/nginx/logs/nginx.pid;</span></span>
<span class="line"><span>worker_rlimit_nofile 51200;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stream {</span></span>
<span class="line"><span>    log_format tcp_format &#39;$time_local|$remote_addr|$protocol|$status|$bytes_sent|$bytes_received|$session_time|$upstream_addr|$upstream_bytes_sent|$upstream_bytes_received|$upstream_connect_time&#39;;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    access_log /www/wwwlogs/tcp-access.log tcp_format;</span></span>
<span class="line"><span>    error_log /www/wwwlogs/tcp-error.log;</span></span>
<span class="line"><span>    include /www/server/panel/vhost/nginx/tcp/*.conf;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        use epoll;</span></span>
<span class="line"><span>        worker_connections 51200;</span></span>
<span class="line"><span>        multi_accept on;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        include       mime.types;</span></span>
<span class="line"><span>		#include luawaf.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		include proxy.conf;</span></span>
<span class="line"><span>        lua_package_path &quot;/www/server/nginx/lib/lua/?.lua;;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        server_names_hash_bucket_size 512;</span></span>
<span class="line"><span>        client_header_buffer_size 32k;</span></span>
<span class="line"><span>        large_client_header_buffers 4 32k;</span></span>
<span class="line"><span>        client_max_body_size 50m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        sendfile   on;</span></span>
<span class="line"><span>        tcp_nopush on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        keepalive_timeout 60;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tcp_nodelay on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fastcgi_connect_timeout 300;</span></span>
<span class="line"><span>        fastcgi_send_timeout 300;</span></span>
<span class="line"><span>        fastcgi_read_timeout 300;</span></span>
<span class="line"><span>        fastcgi_buffer_size 64k;</span></span>
<span class="line"><span>        fastcgi_buffers 4 64k;</span></span>
<span class="line"><span>        fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span>        fastcgi_temp_file_write_size 256k;</span></span>
<span class="line"><span>		fastcgi_intercept_errors on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        gzip on;</span></span>
<span class="line"><span>        gzip_min_length  1k;</span></span>
<span class="line"><span>        gzip_buffers     4 16k;</span></span>
<span class="line"><span>        gzip_http_version 1.1;</span></span>
<span class="line"><span>        gzip_comp_level 2;</span></span>
<span class="line"><span>        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml application/json image/jpeg image/gif image/png font/ttf font/otf image/svg+xml application/xml+rss text/x-js;</span></span>
<span class="line"><span>        gzip_vary on;</span></span>
<span class="line"><span>        gzip_proxied   expired no-cache no-store private auth;</span></span>
<span class="line"><span>        gzip_disable   &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        limit_conn_zone $binary_remote_addr zone=perip:10m;</span></span>
<span class="line"><span>		limit_conn_zone $server_name zone=perserver:10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        server_tokens off;</span></span>
<span class="line"><span>        access_log off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name platform.ninesun.site;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8888;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log /www/wwwlogs/platform-access.log;</span></span>
<span class="line"><span>    error_log /www/wwwlogs/platform-error.log;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name pospool.ninesun.site;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:10032;</span></span>
<span class="line"><span>        add_header Cache-Control no-cache;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log /www/wwwlogs/api-access.log;</span></span>
<span class="line"><span>    error_log /www/wwwlogs/api-error.log;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>    ##https 测试</span></span>
<span class="line"><span>    listen 443 ssl http2;</span></span>
<span class="line"><span>    server_name platform.ninesun.site;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL 配置</span></span>
<span class="line"><span>    ssl_certificate /root/.acme.sh/ninesun.site_ecc/fullchain.cer;</span></span>
<span class="line"><span>    ssl_certificate_key /root/.acme.sh/ninesun.site_ecc/ninesun.site.key;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # SSL 安全优化</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span>    ssl_session_timeout 10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 反向代理配置</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8888;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log /www/wwwlogs/platform-access.log;</span></span>
<span class="line"><span>    error_log /www/wwwlogs/platform-error.log;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>include /www/server/panel/vhost/nginx/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+r+'" alt="alt text"></p>',9)]))}const C=n(c,[["render",o]]);export{_ as __pageData,C as default};
