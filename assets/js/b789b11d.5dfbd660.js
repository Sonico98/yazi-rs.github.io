"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3696:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var s=i(1527),l=i(6225);const d={sidebar_position:3,description:"Learn how to use Yazi's Lua API."},c="Utils",r={id:"plugins/utils",title:"Utils",description:"Learn how to use Yazi's Lua API.",source:"@site/docs/plugins/utils.md",sourceDirName:"plugins",slug:"/plugins/utils",permalink:"/docs/plugins/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/utils.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn how to use Yazi's Lua API."},sidebar:"docsSidebar",previous:{title:"Layout",permalink:"/docs/plugins/layout"},next:{title:"Config",permalink:"/docs/plugins/config"}},h={},t=[{value:"ya",id:"ya",level:2},{value:"<code>file_cache(opts)</code>",id:"file_cacheopts",level:3},{value:"<code>manager_emit(cmd, args, data)</code>",id:"manager_emitcmd-args-data",level:3},{value:"<code>image_show(url, rect)</code>",id:"image_showurl-rect",level:3},{value:"<code>image_precache(src, dist)</code>",id:"image_precachesrc-dist",level:3},{value:"<code>which(opts)</code>",id:"whichopts",level:3},{value:"<code>dbg(msg)</code>",id:"dbgmsg",level:3},{value:"<code>err(msg)</code>",id:"errmsg",level:3},{value:"<code>sync(fn)</code>",id:"syncfn",level:3},{value:"<code>preview_code(opts)</code>",id:"preview_codeopts",level:3},{value:"<code>preview_archive(opts)</code>",id:"preview_archiveopts",level:3},{value:"<code>preview_widgets(opts, widgets)</code>",id:"preview_widgetsopts-widgets",level:3},{value:"<code>target_family()</code>",id:"target_family",level:3},{value:"<code>quote(str)</code>",id:"quotestr",level:3},{value:"<code>truncate(text, max)</code>",id:"truncatetext-max",level:3},{value:"<code>time()</code>",id:"time",level:3},{value:"<code>sleep(secs)</code>",id:"sleepsecs",level:3},{value:"<code>uid()</code>",id:"uid",level:3},{value:"<code>gid()</code>",id:"gid",level:3},{value:"<code>user_name()</code>",id:"user_name",level:3},{value:"<code>group_name()</code>",id:"group_name",level:3},{value:"<code>host_name()</code>",id:"host_name",level:3},{value:"fs",id:"fs",level:2},{value:"<code>write(url, data)</code>",id:"writeurl-data",level:3},{value:"<code>cha(url)</code>",id:"chaurl",level:3},{value:"<code>cha_follow(url)</code>",id:"cha_followurl",level:3},{value:"Command",id:"command",level:2},{value:"<code>arg(arg)</code>",id:"argarg",level:3},{value:"<code>args(args)</code>",id:"argsargs",level:3},{value:"<code>env(key, value)</code>",id:"envkey-value",level:3},{value:"<code>stdin(cfg)</code>",id:"stdincfg",level:3},{value:"<code>stdout(cfg)</code>",id:"stdoutcfg",level:3},{value:"<code>stderr(cfg)</code>",id:"stderrcfg",level:3},{value:"<code>spawn()</code>",id:"spawn",level:3},{value:"<code>output()</code>",id:"output",level:3},{value:"Child",id:"child",level:2},{value:"<code>read(len)</code>",id:"readlen",level:3},{value:"<code>read_line()</code>",id:"read_line",level:3},{value:"<code>read_line_with(opts)</code>",id:"read_line_withopts",level:3},{value:"<code>wait()</code>",id:"wait",level:3},{value:"<code>start_kill()</code>",id:"start_kill",level:3},{value:"Output",id:"output-1",level:2},{value:"Status",id:"status",level:2},{value:"<code>success()</code>",id:"success",level:3},{value:"<code>code()</code>",id:"code",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"utils",children:"Utils"}),"\n",(0,s.jsx)(n.h2,{id:"ya",children:"ya"}),"\n",(0,s.jsx)(n.h3,{id:"file_cacheopts",children:(0,s.jsx)(n.code,{children:"file_cache(opts)"})}),"\n",(0,s.jsxs)(n.p,{children:["Calculate the cached ",(0,s.jsx)(n.a,{href:"#url",children:"Url"})," corresponding to the given file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"opts"})," - Required, the options of the cache, which is a table:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"})," - The ",(0,s.jsx)(n.a,{href:"#file",children:"File"})," to be cached"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the file is not allowed to be cached, such as it's ignored in the user config, or the file itself is a cache, returns ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"manager_emitcmd-args-data",children:(0,s.jsx)(n.code,{children:"manager_emit(cmd, args, data)"})}),"\n",(0,s.jsx)(n.p,{children:"Send a command to the manager without waiting for the executor to execute:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmd"})," - Required, the command name, which is a string"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," - Required, the arguments of the command, which is a table with a number key and string/number value, or a string key and string/number/boolean value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - Optional, additional data passed to the command"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ya.manager_emit("my-cmd", { "hello", 123, foo = true, bar_baz = "world" })\n\n-- Equivalent to:\n-- my-cmd "hello" "123" --foo --bar-baz="world"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"image_showurl-rect",children:(0,s.jsx)(n.code,{children:"image_show(url, rect)"})}),"\n",(0,s.jsx)(n.p,{children:"Display the given image within the specified area, and the image will downscale to fit that area automatically:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - Required, the ",(0,s.jsx)(n.a,{href:"#url",children:"Url"})," of the image"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rect"})," - Required, the ",(0,s.jsx)(n.a,{href:"#uirect",children:"Rect"})," of the area"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"image_precachesrc-dist",children:(0,s.jsx)(n.code,{children:"image_precache(src, dist)"})}),"\n",(0,s.jsxs)(n.p,{children:["Pre-cache the image to a specified url based on user-configured ",(0,s.jsxs)(n.a,{href:"../configuration/yazi#preview",children:[(0,s.jsx)(n.code,{children:"max_width"})," and ",(0,s.jsx)(n.code,{children:"max_height"})]}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src"})," - Required, the source ",(0,s.jsx)(n.a,{href:"#url",children:"Url"})," of the image"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dist"})," - Required, the destination ",(0,s.jsx)(n.a,{href:"#url",children:"Url"})," of the image"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"whichopts",children:(0,s.jsx)(n.code,{children:"which(opts)"})}),"\n",(0,s.jsx)(n.p,{children:"Prompt users with a set of available keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"opts"}),": Required, the options of the prompt, which is a table:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cands"}),": Required, the key candidates, which is a table of tables that contains the following fields:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"on"}),": Required, the key to be prompted, which is a string or a table of strings if multiple keys"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"desc"}),": Optional, the description of the key, which is a string"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"silent"}),": Optional, whether to show the UI of key indicator, which is a boolean"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local key = ya.which {\n\tcands = {\n\t\t{ on = "a" },\n\t\t{ on = "b", desc = "optional description" },\n\t\t{ on = "<C-c>", desc = "key combination" },\n\t\t{ on = { "d", "e" }, desc = "multiple keys" },\n\t},\n\t-- silent = true, -- If you don\'t want to show the UI of key indicator\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When the user clicks a valid candidate, ",(0,s.jsx)(n.code,{children:"ya.which"}),' returns the 1-based index of that "cand";\notherwise, it returns nil, indicating that the user has canceled the key operation.']}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"dbgmsg",children:(0,s.jsx)(n.code,{children:"dbg(msg)"})}),"\n",(0,s.jsxs)(n.p,{children:["Append messages to ",(0,s.jsx)(n.a,{href:"./overview#logging",children:"the log file"})," at the debug level:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"msg"})," - Required, the message to be logged, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['Note that if you use a release build of Yazi, the log level is "error" instead of "debug", so you\'ll need to use ',(0,s.jsx)(n.a,{href:"#errmsg",children:(0,s.jsx)(n.code,{children:"ya.err"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"errmsg",children:(0,s.jsx)(n.code,{children:"err(msg)"})}),"\n",(0,s.jsxs)(n.p,{children:["Append messages to ",(0,s.jsx)(n.a,{href:"./overview#logging",children:"the log file"})," at the error level:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"msg"})," - Required, the message to be logged, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"syncfn",children:(0,s.jsx)(n.code,{children:"sync(fn)"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/plugins/overview#async-context",children:"Async context"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"preview_codeopts",children:(0,s.jsx)(n.code,{children:"preview_code(opts)"})}),"\n",(0,s.jsx)(n.p,{children:"Preview the file as code into the specified area:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"opts"})," - Required, the options of the preview, which is a table:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"})," - The previewed ",(0,s.jsx)(n.a,{href:"#file",children:"File"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area"})," - The area of the preview, which is a ",(0,s.jsx)(n.a,{href:"#uirect",children:"Rect"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window"})," - The ",(0,s.jsx)(n.a,{href:"#window",children:"Window"})," of the preview"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"(ok, upper_bound)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ok"})," - Whether the preview is successful, which is a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upper_bound"})," - If the preview fails (",(0,s.jsx)(n.code,{children:"ok = false"}),") and it's because exceeds the maximum upper bound, return this bound; otherwise, ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"preview_archiveopts",children:(0,s.jsx)(n.code,{children:"preview_archive(opts)"})}),"\n",(0,s.jsx)(n.p,{children:"Preview the file as an archive into the specified area:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"opts"})," - Required, the options of the preview. It's the same as ",(0,s.jsx)(n.a,{href:"#previewcodeopts",children:(0,s.jsx)(n.code,{children:"preview_code"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"(ok, upper_bound)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ok"})," - Whether the preview is successful, which is a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upper_bound"})," - If the preview fails (",(0,s.jsx)(n.code,{children:"ok = false"}),") and it's because exceeds the maximum upper bound, return this bound; otherwise, ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"preview_widgetsopts-widgets",children:(0,s.jsx)(n.code,{children:"preview_widgets(opts, widgets)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"opts"})," - Required, the options of the preview, which is a table:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"})," - The previewed ",(0,s.jsx)(n.a,{href:"#file",children:"File"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"})," - The number of units to skip. It's units largely depend on your previewer, such as lines for code, and percentages for videos"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window"})," - The ",(0,s.jsx)(n.a,{href:"#window",children:"Window"})," of the preview"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"widgets"})," - List of renderable widgets, such as ",(0,s.jsx)(n.code,{children:"{ ui.Paragraph {...}, ui.List {...}, ... }"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"target_family",children:(0,s.jsx)(n.code,{children:"target_family()"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns the target family of the current platform, ",(0,s.jsx)(n.code,{children:'"windows"'}),", ",(0,s.jsx)(n.code,{children:'"unix"'}),", or ",(0,s.jsx)(n.code,{children:'"wasm"'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"quotestr",children:(0,s.jsx)(n.code,{children:"quote(str)"})}),"\n",(0,s.jsx)(n.p,{children:"Quote characters that may have special meaning in a shell:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"str"}),": Required, the string to be quoted, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local handle = io.popen("ls " .. ya.quote(filename))\n'})}),"\n",(0,s.jsx)(n.h3,{id:"truncatetext-max",children:(0,s.jsx)(n.code,{children:"truncate(text, max)"})}),"\n",(0,s.jsx)(n.p,{children:"Truncate the text to the specified length and return it:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," - Required, the text to be truncated, which is a string"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max"})," - Required, the maximum length of the text, which is an integer"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"time",children:(0,s.jsx)(n.code,{children:"time()"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the current timestamp, which is a float, the integer part represents the seconds, and the decimal part represents the milliseconds."}),"\n",(0,s.jsx)(n.h3,{id:"sleepsecs",children:(0,s.jsx)(n.code,{children:"sleep(secs)"})}),"\n",(0,s.jsxs)(n.p,{children:["Waits until ",(0,s.jsx)(n.code,{children:"secs"})," has elapsed:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secs"}),": Required, the number of seconds to sleep, which is a positive float"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ya.sleep(0.5)  -- Sleep for 500 milliseconds\n"})}),"\n",(0,s.jsx)(n.p,{children:"This function is only available in the async context."}),"\n",(0,s.jsx)(n.h3,{id:"uid",children:(0,s.jsx)(n.code,{children:"uid()"})}),"\n",(0,s.jsx)(n.p,{children:"Only available on Unix-like systems. Returns the user id of the current user, which is an integer."}),"\n",(0,s.jsx)(n.h3,{id:"gid",children:(0,s.jsx)(n.code,{children:"gid()"})}),"\n",(0,s.jsx)(n.p,{children:"Only available on Unix-like systems. Returns the group id of the current user, which is an integer."}),"\n",(0,s.jsx)(n.h3,{id:"user_name",children:(0,s.jsx)(n.code,{children:"user_name()"})}),"\n",(0,s.jsxs)(n.p,{children:["Only available on Unix-like systems. Returns the name of the current user, which is a string if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"group_name",children:(0,s.jsx)(n.code,{children:"group_name()"})}),"\n",(0,s.jsxs)(n.p,{children:["Only available on Unix-like systems. Returns the name of the current group, which is a string if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"host_name",children:(0,s.jsx)(n.code,{children:"host_name()"})}),"\n",(0,s.jsxs)(n.p,{children:["Only available on Unix-like systems. Returns the hostname of the current machine, which is a string if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fs",children:"fs"}),"\n",(0,s.jsx)(n.p,{children:"The following functions can only be used within an async context."}),"\n",(0,s.jsx)(n.h3,{id:"writeurl-data",children:(0,s.jsx)(n.code,{children:"write(url, data)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local ok, err = fs.write(url, "hello world")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Write data to the specified file:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - Required, the ",(0,s.jsx)(n.a,{href:"./types#url",children:"Url"})," of the file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - Required, the data to be written, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"(ok, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ok"})," - Whether the operation is successful, which is a boolean"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"chaurl",children:(0,s.jsx)(n.code,{children:"cha(url)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local cha, err = fs.cha(url)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Get the ",(0,s.jsx)(n.a,{href:"./types#cha",children:"Cha"})," of the specified file, which is faster than ",(0,s.jsx)(n.a,{href:"#chafollowurl",children:(0,s.jsx)(n.code,{children:"cha_follow"})})," since it never follows the symbolic link:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - Required, the ",(0,s.jsx)(n.a,{href:"./types#url",children:"Url"})," of the file"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"(cha, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cha"})," - The ",(0,s.jsx)(n.a,{href:"./types#cha",children:"Cha"})," of the file if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cha_followurl",children:(0,s.jsx)(n.code,{children:"cha_follow(url)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local cha, err = fs.cha_follow(url)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Get the ",(0,s.jsx)(n.a,{href:"./types#cha",children:"Cha"})," of the specified file, and follow the symbolic link:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - Required, the ",(0,s.jsx)(n.a,{href:"./types#url",children:"Url"})," of the file"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"(cha, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cha"})," - The ",(0,s.jsx)(n.a,{href:"./types#cha",children:"Cha"})," of the file if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"command",children:"Command"}),"\n",(0,s.jsx)(n.p,{children:"You can invoke external programs through:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local child = Command("ls")\n\t:args({ "-a", "-l" })\n\t:stdout(Command.PIPED)\n\t:spawn()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Compared to Lua's ",(0,s.jsx)(n.code,{children:"os.execute"}),", it provides many comprehensive and convenient methods, and the entire process is async."]}),"\n",(0,s.jsx)(n.p,{children:"It takes better advantage of the benefits of concurrent scheduling. However, it can only be used in async contexts, such as preloaders, previewers, and async functional plugins."}),"\n",(0,s.jsx)(n.h3,{id:"argarg",children:(0,s.jsx)(n.code,{children:"arg(arg)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):arg("-a"):arg("-l")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Append an argument to the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arg"})," - Required, the argument to be appended, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"argsargs",children:(0,s.jsx)(n.code,{children:"args(args)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):args({ "-a", "-l" }):args({ "-h" })\n'})}),"\n",(0,s.jsx)(n.p,{children:"Append multiple arguments to the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," - Required, the arguments to be appended, which is a table of strings"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"envkey-value",children:(0,s.jsx)(n.code,{children:"env(key, value)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):env("PATH", "/bin"):env("HOME", "/home")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Append an environment variable to the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," - Required, the key of the environment variable, which is a string"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," - Required, the value of the environment variable, which is a string"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"stdincfg",children:(0,s.jsx)(n.code,{children:"stdin(cfg)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):stdin(Command.PIPED)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Set the stdin of the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cfg"})," - Required, the configuration of the stdin, accepts the following values:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.PIPED"})," - Pipe the stdin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.NULL"})," - Discard the stdin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.INHERIT"})," - Inherit the stdin"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If not set, the stdin will be null. Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"stdoutcfg",children:(0,s.jsx)(n.code,{children:"stdout(cfg)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):stdout(Command.PIPED)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Set the stdout of the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cfg"})," - Required, the configuration of the stdout, accepts the following values:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.PIPED"})," - Pipe the stdout"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.NULL"})," - Discard the stdout"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.INHERIT"})," - Inherit the stdout"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If not set, the stdout will be null. Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"stderrcfg",children:(0,s.jsx)(n.code,{children:"stderr(cfg)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local cmd = Command("ls"):stderr(Command.PIPED)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Set the stderr of the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cfg"})," - Required, the configuration of the stderr, accepts the following values:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.PIPED"})," - Pipe the stderr"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.NULL"})," - Discard the stderr"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Command.INHERIT"})," - Inherit the stderr"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If not set, the stderr will be null. Returns ",(0,s.jsx)(n.code,{children:"self"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"spawn",children:(0,s.jsx)(n.code,{children:"spawn()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local child, err = Command("ls"):spawn()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Spawn the command, returns ",(0,s.jsx)(n.code,{children:"(child, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"child"})," - The ",(0,s.jsx)(n.a,{href:"#child",children:"Child"})," of the command if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"output",children:(0,s.jsx)(n.code,{children:"output()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local output, err = Command("ls"):output()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Spawn the command and wait for it to finish, returns ",(0,s.jsx)(n.code,{children:"(output, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output"})," - The ",(0,s.jsx)(n.a,{href:"#output-1",children:"Output"})," of the command if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"child",children:"Child"}),"\n",(0,s.jsxs)(n.p,{children:["This object is created by ",(0,s.jsx)(n.a,{href:"#spawn",children:(0,s.jsx)(n.code,{children:"Command:spawn"})})," and represents a running child process."]}),"\n",(0,s.jsx)(n.p,{children:"You can access the runtime data of this process through its proprietary methods."}),"\n",(0,s.jsx)(n.h3,{id:"readlen",children:(0,s.jsx)(n.code,{children:"read(len)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local data, event = child:read(1024)\n"})}),"\n",(0,s.jsxs)(n.p,{children:['Let\'s say "available data source" refers to ',(0,s.jsx)(n.code,{children:"stdout"})," or ",(0,s.jsx)(n.code,{children:"stderr"})," that has been set with ",(0,s.jsx)(n.code,{children:"Command.PIPED"}),", or them both."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"read()"})," reads data from the available data source alternately, and the ",(0,s.jsx)(n.code,{children:"event"})," indicates the source of the data:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The data comes from stdout if event is 0"}),"\n",(0,s.jsx)(n.li,{children:"The data comes from stderr if event is 1"}),"\n",(0,s.jsx)(n.li,{children:"There's no data to read from both stdout and stderr, if event is 2"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"read_line",children:(0,s.jsx)(n.code,{children:"read_line()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local line, event = child:read_line()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.a,{href:"#readlen",children:(0,s.jsx)(n.code,{children:"read()"})}),", but it reads data line by line."]}),"\n",(0,s.jsx)(n.h3,{id:"read_line_withopts",children:(0,s.jsx)(n.code,{children:"read_line_with(opts)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local line, event = child:wait_line_with { timeout = 500 }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.a,{href:"#read_line",children:(0,s.jsx)(n.code,{children:"read_line()"})}),", but it accepts a table of options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"})," - Required, timeout in milliseconds, which is an integer"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"And includes the following additional events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Timeout if event is 3"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wait",children:(0,s.jsx)(n.code,{children:"wait()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local status, err = child:wait()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wait for the child process to finish, returns ",(0,s.jsx)(n.code,{children:"(status, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"status"})," - The ",(0,s.jsx)(n.a,{href:"#status",children:"Status"})," of the child process if successful; otherwise, ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start_kill",children:(0,s.jsx)(n.code,{children:"start_kill()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local ok, err = child:start_kill()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Send a SIGTERM signal to the child process, returns ",(0,s.jsx)(n.code,{children:"(ok, err)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ok"})," - Whether the operation is successful, which is a boolean"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"err"})," - The error code if the operation is failed, which is an integer if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(n.p,{children:"Properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"status"}),": The ",(0,s.jsx)(n.a,{href:"#status",children:"Status"})," of the child process"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stdout"}),": The stdout of the child process, which is a string"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stderr"}),": The stderr of the child process, which is a string"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,s.jsxs)(n.p,{children:["This object represents the exit status of a child process, and it is created by ",(0,s.jsx)(n.a,{href:"#wait",children:(0,s.jsx)(n.code,{children:"wait()"})}),", or ",(0,s.jsx)(n.a,{href:"#output-1",children:(0,s.jsx)(n.code,{children:"output()"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"success",children:(0,s.jsx)(n.code,{children:"success()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local ok = status:success()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns whether the child process exited successfully, which is a boolean."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:(0,s.jsx)(n.code,{children:"code()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local code = status:code()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the exit code of the child process, which is an integer if any."})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6225:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var s=i(959);const l={},d=s.createContext(l);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);