"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[131],{9286:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=n(1527),r=n(6225);const l={sidebar_position:1,description:"Learn how to configure Yazi's basic functionality."},d="yazi.toml",c={id:"configuration/yazi",title:"yazi.toml",description:"Learn how to configure Yazi's basic functionality.",source:"@site/docs/configuration/yazi.md",sourceDirName:"configuration",slug:"/configuration/yazi",permalink:"/docs/configuration/yazi",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/configuration/yazi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learn how to configure Yazi's basic functionality."},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/overview"},next:{title:"keymap.toml",permalink:"/docs/configuration/keymap"}},o={},t=[{value:"[manager]",id:"manager",level:2},{value:"<code>ratio</code>",id:"ratio",level:3},{value:"<code>sort_by</code>",id:"sort_by",level:3},{value:"<code>sort_sensitive</code>",id:"sort_sensitive",level:3},{value:"<code>sort_reverse</code>",id:"sort_reverse",level:3},{value:"<code>sort_dir_first</code>",id:"sort_dir_first",level:3},{value:"<code>linemode</code>",id:"linemode",level:3},{value:"<code>show_hidden</code>",id:"show_hidden",level:3},{value:"<code>show_symlink</code>",id:"show_symlink",level:3},{value:"<code>scrolloff</code>",id:"scrolloff",level:3},{value:"[preview]",id:"preview",level:2},{value:"<code>tab_size</code>",id:"tab_size",level:3},{value:"<code>max_width</code>",id:"max_width",level:3},{value:"<code>max_height</code>",id:"max_height",level:3},{value:"<code>cache_dir</code>",id:"cache_dir",level:3},{value:"<code>image_filter</code>",id:"image_filter",level:3},{value:"<code>image_quality</code>",id:"image_quality",level:3},{value:"<code>sixel_fraction</code>",id:"sixel_fraction",level:3},{value:"Ueberzug-specific",id:"ueberzug-specific",level:3},{value:"[opener]",id:"opener",level:2},{value:"[open]",id:"open",level:2},{value:"[tasks]",id:"tasks",level:2},{value:"<code>micro_workers</code>",id:"micro_workers",level:3},{value:"<code>macro_workers</code>",id:"macro_workers",level:3},{value:"<code>bizarre_retry</code>",id:"bizarre_retry",level:3},{value:"<code>suppress_preload</code>",id:"suppress_preload",level:3},{value:"<code>image_alloc</code>",id:"image_alloc",level:3},{value:"<code>image_bound</code>",id:"image_bound",level:3},{value:"[plugin]",id:"plugin",level:2},{value:"previewers",id:"previewers",level:3},{value:"preloaders",id:"preloaders",level:3},{value:"[input]",id:"input",level:2},{value:"Origin",id:"origin",level:3},{value:"Offset",id:"offset",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"[select]",id:"select",level:2},{value:"[which]",id:"which",level:2},{value:"<code>sort_by</code>",id:"sort_by-1",level:3},{value:"<code>sort_sensitive</code>",id:"sort_sensitive-1",level:3},{value:"<code>sort_reverse</code>",id:"sort_reverse-1",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"yazitoml",children:"yazi.toml"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["If you haven't created and used your own configuration file yet, please see ",(0,s.jsx)(i.a,{href:"/docs/configuration/overview",children:"Configuration"}),"."]})}),"\n",(0,s.jsx)(i.h2,{id:"manager",children:"[manager]"}),"\n",(0,s.jsx)(i.h3,{id:"ratio",children:(0,s.jsx)(i.code,{children:"ratio"})}),"\n",(0,s.jsx)(i.p,{children:"Manager layout by ratio, 3-element array."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"[1, 4, 3]"}),": 1/8 width for parent, 4/8 width for current, 3/8 width for preview"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_by",children:(0,s.jsx)(i.code,{children:"sort_by"})}),"\n",(0,s.jsx)(i.p,{children:"File sorting method."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": Don't sort."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"modified"'}),": Sort by last modified time."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"created"'}),": Sort by creation time. (Due to a Rust bug, this is not available at the moment, see ",(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/issues/356",children:"sxyazi/yazi#356"})," and ",(0,s.jsx)(i.a,{href:"https://github.com/rust-lang/rust/issues/108277",children:"rust-lang/rust#108277"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"extension"'}),": Sort by file extension."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"alphabetical"'}),": Sort alphabetically, e.g. ",(0,s.jsx)(i.code,{children:"1.md"})," < ",(0,s.jsx)(i.code,{children:"10.md"})," < ",(0,s.jsx)(i.code,{children:"2.md"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"natural"'}),": Sort naturally, e.g. ",(0,s.jsx)(i.code,{children:"1.md"})," < ",(0,s.jsx)(i.code,{children:"2.md"})," < ",(0,s.jsx)(i.code,{children:"10.md"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"size"'}),": Sort by file size."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_sensitive",children:(0,s.jsx)(i.code,{children:"sort_sensitive"})}),"\n",(0,s.jsx)(i.p,{children:"Sort case-sensitively."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Case-sensitive"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Case-insensitive"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_reverse",children:(0,s.jsx)(i.code,{children:"sort_reverse"})}),"\n",(0,s.jsx)(i.p,{children:"Display files in reverse order."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Reverse order"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Normal order"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_dir_first",children:(0,s.jsx)(i.code,{children:"sort_dir_first"})}),"\n",(0,s.jsx)(i.p,{children:"Display directories first."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Directories first"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Respects ",(0,s.jsx)(i.code,{children:"sort_by"})," and ",(0,s.jsx)(i.code,{children:"sort_reverse"})," only"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"linemode",children:(0,s.jsx)(i.code,{children:"linemode"})}),"\n",(0,s.jsx)(i.p,{children:"Line mode: display information associated with the file on the right side of the file list row."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": No line mode."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"size"'}),": Display the size of the file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"permissions"'}),": Display the permissions of the file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"mtime"'}),": Display the last modified time of the file."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["In addition, you can also specify any 1 to 20 characters, and extend it within a UI plugin.\nWhich means you can implement your own linemode through the plugin by simply overriding the ",(0,s.jsxs)(i.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-plugin/preset/components/folder.lua",children:[(0,s.jsx)(i.code,{children:"Folder:linemode"})," method"]}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"show_hidden",children:(0,s.jsx)(i.code,{children:"show_hidden"})}),"\n",(0,s.jsx)(i.p,{children:"Show hidden files."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Show"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Do not show"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"show_symlink",children:(0,s.jsx)(i.code,{children:"show_symlink"})}),"\n",(0,s.jsx)(i.p,{children:"Show the path of the symlink file point to, after the filename."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Show"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Do not show"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"scrolloff",children:(0,s.jsx)(i.code,{children:"scrolloff"})}),"\n",(0,s.jsx)(i.p,{children:"The number of files to keep above and below the cursor when moving through the file list."}),"\n",(0,s.jsxs)(i.p,{children:["If the value is larger than half the screen height (e.g. ",(0,s.jsx)(i.code,{children:"200"}),"), the cursor will be centered."]}),"\n",(0,s.jsx)(i.h2,{id:"preview",children:"[preview]"}),"\n",(0,s.jsx)(i.h3,{id:"tab_size",children:(0,s.jsx)(i.code,{children:"tab_size"})}),"\n",(0,s.jsx)(i.p,{children:"Tab width."}),"\n",(0,s.jsx)(i.h3,{id:"max_width",children:(0,s.jsx)(i.code,{children:"max_width"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum preview width for images. Do a ",(0,s.jsx)(i.code,{children:"yazi --clear-cache"})," to take effect after changing this."]}),"\n",(0,s.jsx)(i.h3,{id:"max_height",children:(0,s.jsx)(i.code,{children:"max_height"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum preview height for images. Do a ",(0,s.jsx)(i.code,{children:"yazi --clear-cache"})," to take effect after changing this."]}),"\n",(0,s.jsx)(i.h3,{id:"cache_dir",children:(0,s.jsx)(i.code,{children:"cache_dir"})}),"\n",(0,s.jsx)(i.p,{children:"The system cache directory is used by default, and the cached files will go away on a reboot automatically."}),"\n",(0,s.jsx)(i.p,{children:"If you want to make it more persistent, you can specify the cache directory manually as an absolute path."}),"\n",(0,s.jsx)(i.h3,{id:"image_filter",children:(0,s.jsx)(i.code,{children:"image_filter"})}),"\n",(0,s.jsx)(i.p,{children:"The filter used on image downscaling, available values:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"nearest"'})," - Nearest Neighbor"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"triangle"'})," - Linear Triangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"catmull-rom"'})," - Catmull-Rom"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"lanczos3"'})," - Lanczos with window 3"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"They are arranged in order from fast to slow, and from poor to good quality - Lanczos3 provides the highest quality but is also the slowest."}),"\n",(0,s.jsxs)(i.p,{children:["See the example and benchmark here: ",(0,s.jsx)(i.a,{href:"https://docs.rs/image/0.24.8/image/imageops/enum.FilterType.html#examples",children:"https://docs.rs/image/0.24.8/image/imageops/enum.FilterType.html#examples"})]}),"\n",(0,s.jsx)(i.h3,{id:"image_quality",children:(0,s.jsx)(i.code,{children:"image_quality"})}),"\n",(0,s.jsx)(i.p,{children:"Quality on pre-caching images, range 50-90."}),"\n",(0,s.jsx)(i.p,{children:"The larger value, the better image quality, but slower with more CPU consumption, and generates larger cache files that occupy more storage space."}),"\n",(0,s.jsx)(i.h3,{id:"sixel_fraction",children:(0,s.jsx)(i.code,{children:"sixel_fraction"})}),"\n",(0,s.jsx)(i.p,{children:"Sixel is a very old image format that only supports 256 colors. For better image preview, Yazi trains a neural network for each image to find the most representative colors."}),"\n",(0,s.jsx)(i.p,{children:"This value determines the number of samples used during the training, range 10-20. A smaller value produces better results but is also slower."}),"\n",(0,s.jsx)(i.h3,{id:"ueberzug-specific",children:"Ueberzug-specific"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["ueberzug_scale (Float): Ueberzug image scaling ratio, ",(0,s.jsx)(i.code,{children:"scale>1"})," for enlargement, ",(0,s.jsx)(i.code,{children:"scale<1"})," for reduction. For example, ",(0,s.jsx)(i.code,{children:"0.5"})," indicates a reduction to half."]}),"\n",(0,s.jsxs)(i.li,{children:["ueberzug_offset (",(0,s.jsx)(i.code,{children:"[x, y, width, height]"}),"): Ueberzug image offset, in cell units. For example, ",(0,s.jsx)(i.code,{children:"[0.5, 0.5, -0.5, -0.5]"})," indicates that the image is offset by half a cell in both directions, and the width and height are reduced by half a cell."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["This is useful for solving ",(0,s.jsx)(i.a,{href:"https://github.com/jstkdng/ueberzugpp/issues/122",children:"the bug of Ueberzug image size calculation"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If your monitor has a ",(0,s.jsx)(i.code,{children:"2.0"})," scale factor, and is running on Wayland under Hyprland, you may need to set ",(0,s.jsx)(i.code,{children:"ueberzug_scale: 0.5"}),", and adjust the value of ",(0,s.jsx)(i.code,{children:"ueberzug_offset"})," according to your case, to offset this issue."]}),"\n",(0,s.jsx)(i.h2,{id:"opener",children:"[opener]"}),"\n",(0,s.jsx)(i.p,{children:"Configure available openers, for example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[opener]\narchive = [\n\t{ exec = \'unar "$1"\', desc = "Extract here" },\n]\ntext = [\n\t{ exec = \'nvim "$@"\', block = true },\n]\n# ...\n'})}),"\n",(0,s.jsx)(i.p,{children:"Available parameters are as follows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["exec: The command to open the selected files, with the following variables available:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"$n"})," (Unix) / ",(0,s.jsx)(i.code,{children:"%n"})," (Windows): The N-th selected file, starting from ",(0,s.jsx)(i.code,{children:"1"}),". e.g. ",(0,s.jsx)(i.code,{children:"$2"})," represents the second selected file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"$@"})," (Unix) / ",(0,s.jsx)(i.code,{children:"%*"})," (Windows): All selected files."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"block (Boolean): Open in a blocking manner. After setting this, Yazi will hide into a secondary screen and display the program on the main screen until it exits. During this time, it can receive I/O signals, which is useful for interactive programs."}),"\n",(0,s.jsx)(i.li,{children:"orphan (Boolean): Keep the process running even if Yazi has exited."}),"\n",(0,s.jsx)(i.li,{children:"desc: Description of the opener, displayed in the selection menu."}),"\n",(0,s.jsxs)(i.li,{children:["for: Optional. This opener is only available on this system; when not specified, it's available on all systems. Available values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"unix"}),": Linux and macOS"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"windows"}),": Windows"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"linux"}),": Linux"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"macos"}),": macOS"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"open",children:"[open]"}),"\n",(0,s.jsx)(i.p,{children:"Set rules for opening specific files, for example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[open]\nrules = [\n\t{ mime = "text/*", use = "text" },\n\t{ mime = "image/*", use = "image" },\n\n\t# { mime = "application/json", use = "text" },\n\t{ name = "*.json", use = "text" },\n\n\t# Multiple openers for a single rule\n\t{ name = "*.html", use = [ "browser", "text" ] },\n]\n'})}),"\n",(0,s.jsx)(i.p,{children:"Available rule parameters are as follows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["name (String): Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:["mime (String): Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:["use (String): Opener name corresponding to the names in the ",(0,s.jsxs)(i.a,{href:"#opener",children:[(0,s.jsx)(i.code,{children:"[opener]"})," section"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"tasks",children:"[tasks]"}),"\n",(0,s.jsx)(i.h3,{id:"micro_workers",children:(0,s.jsx)(i.code,{children:"micro_workers"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of concurrent micro-tasks."}),"\n",(0,s.jsx)(i.h3,{id:"macro_workers",children:(0,s.jsx)(i.code,{children:"macro_workers"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of concurrent macro-tasks."}),"\n",(0,s.jsx)(i.h3,{id:"bizarre_retry",children:(0,s.jsx)(i.code,{children:"bizarre_retry"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of retries when a bizarre failure occurs."}),"\n",(0,s.jsx)(i.h3,{id:"suppress_preload",children:(0,s.jsx)(i.code,{children:"suppress_preload"})}),"\n",(0,s.jsx)(i.p,{children:"Exclude the preload tasks created by the system from the task list, do not report their progress, and do not consider them on app exit confirming."}),"\n",(0,s.jsx)(i.h3,{id:"image_alloc",children:(0,s.jsx)(i.code,{children:"image_alloc"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum memory allocation limit in bytes for decoding a single image, ",(0,s.jsx)(i.code,{children:"0"})," for unlimited."]}),"\n",(0,s.jsx)(i.h3,{id:"image_bound",children:(0,s.jsx)(i.code,{children:"image_bound"})}),"\n",(0,s.jsxs)(i.p,{children:["An array of ",(0,s.jsx)(i.code,{children:"[width, height]"}),", maximum image size (in pixels) for decoding a single image, and ",(0,s.jsx)(i.code,{children:"0"})," for unlimited."]}),"\n",(0,s.jsx)(i.h2,{id:"plugin",children:"[plugin]"}),"\n",(0,s.jsx)(i.h3,{id:"previewers",children:"previewers"}),"\n",(0,s.jsxs)(i.p,{children:["You can prepend or append new preview rules to the default ",(0,s.jsx)(i.code,{children:"previewers"})," under ",(0,s.jsx)(i.code,{children:"[plugin]"})," by ",(0,s.jsx)(i.code,{children:"prepend_previewers"})," and ",(0,s.jsx)(i.code,{children:"append_previewers"}),".\nHere are the available options for a single rule:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (String): Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"})," (String): Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"exec"})," (String): The name of the Lua plugin to be executed."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"sync"})," (Boolean): Whether to execute in the sync context, default is ",(0,s.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[plugin]\nprepend_previewers = [\n\t# HEIC previewer\n\t{ mime = "image/heic", exec = "heic" },\n]\n\nappend_previewers = [\n\t# My fallback previewer\n\t{ name = "*" , exec = "binary" },\n]\n'})}),"\n",(0,s.jsxs)(i.p,{children:["If your ",(0,s.jsx)(i.code,{children:"append_rules"})," contains wildcard ",(0,s.jsx)(i.code,{children:"name"})," rules (",(0,s.jsx)(i.code,{children:'"*"'})," or ",(0,s.jsx)(i.code,{children:'"*/"'}),"), they will always take precedence over the default wildcard rules as the fallback."]}),"\n",(0,s.jsx)(i.p,{children:"Yazi comes with the these previewer plugins:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"folder: bridge between the Yazi file system and the preview"}),"\n",(0,s.jsx)(i.li,{children:"code: bridge between built-in code highlighting and the preview, providing async concurrent rendering"}),"\n",(0,s.jsxs)(i.li,{children:["json: bridge between ",(0,s.jsx)(i.code,{children:"jq"})," and the preview, providing async concurrent rendering"]}),"\n",(0,s.jsx)(i.li,{children:"noop: no operation"}),"\n",(0,s.jsx)(i.li,{children:"image: presentation layer of built-in image preview, offering mixed preview capabilities"}),"\n",(0,s.jsxs)(i.li,{children:["video: bridge between ",(0,s.jsx)(i.code,{children:"ffmpegthumbnailer"})," and the preview, offering mixed preview capabilities"]}),"\n",(0,s.jsxs)(i.li,{children:["pdf: bridge between ",(0,s.jsx)(i.code,{children:"pdftoppm"})," and the preview, offering mixed preview capabilities"]}),"\n",(0,s.jsxs)(i.li,{children:["archive: bridge between ",(0,s.jsx)(i.code,{children:"unar"})," and the preview, offering mixed preview and concurrent rendering capabilities"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to create your own previewer, see ",(0,s.jsx)(i.a,{href:"../plugins/overview#previewer",children:"Previewer API"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"preloaders",children:"preloaders"}),"\n",(0,s.jsxs)(i.p,{children:["You can prepend or append new preview rules to the default ",(0,s.jsx)(i.code,{children:"preloaders"})," under ",(0,s.jsx)(i.code,{children:"[plugin]"})," by ",(0,s.jsx)(i.code,{children:"prepend_preloaders"})," and ",(0,s.jsx)(i.code,{children:"append_preloaders"}),".\nHere are the available options for a single rule:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (String): Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"})," (String): Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cond"})," (String): Conditional expression \u2013 Only rules that meet this condition and satisfy either the ",(0,s.jsx)(i.code,{children:"name"})," or ",(0,s.jsx)(i.code,{children:"mime"})," will be applied. For example, ",(0,s.jsx)(i.code,{children:"A & B"})," means A and B, and ",(0,s.jsx)(i.code,{children:"A | !B"})," means A or not B. Here are the available factors:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"}),": This file has a mime-type"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"exec"})," (String): The name of the Lua plugin to be executed"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"multi"})," (Boolean): Whether to preload multiple files at once"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"prio"})," (String): Preload priority, ",(0,s.jsx)(i.code,{children:"low"}),", ",(0,s.jsx)(i.code,{children:"normal"})," or ",(0,s.jsx)(i.code,{children:"high"}),". The default is ",(0,s.jsx)(i.code,{children:"normal"})," if not specified."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[plugin]\nprepend_preloaders = [\n\t# HEIC preloader\n\t{ mime = "image/heic", exec = "heic" },\n]\n'})}),"\n",(0,s.jsx)(i.p,{children:"Yazi comes with the these preloader plugins:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"mime: preloads mime-type of files in chunks"}),"\n",(0,s.jsx)(i.li,{children:"noop: no operation"}),"\n",(0,s.jsx)(i.li,{children:"image: preloads and caches images"}),"\n",(0,s.jsx)(i.li,{children:"video: preloads and caches videos"}),"\n",(0,s.jsx)(i.li,{children:"pdf: preloads and caches PDFs."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to create your own preloader, see ",(0,s.jsx)(i.a,{href:"../plugins/overview#preloader",children:"Preloader API"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"input",children:"[input]"}),"\n",(0,s.jsxs)(i.p,{children:["You can customize the title and position of each input. As for position, it consists of two parts: ",(0,s.jsx)(i.a,{href:"#origin",children:"Origin"})," and ",(0,s.jsx)(i.a,{href:"#offset",children:"Offset"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The origin is the top-left corner of the input, and the offset is the increment from this origin. Together, they determine the area of the input on the screen."}),"\n",(0,s.jsx)(i.h3,{id:"origin",children:"Origin"}),"\n",(0,s.jsx)(i.p,{children:"For the origin, the following values are available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"top-left"}),"\n",(0,s.jsx)(i.li,{children:"top-center"}),"\n",(0,s.jsx)(i.li,{children:"top-right"}),"\n",(0,s.jsx)(i.li,{children:"bottom-left"}),"\n",(0,s.jsx)(i.li,{children:"bottom-center"}),"\n",(0,s.jsx)(i.li,{children:"bottom-right"}),"\n",(0,s.jsx)(i.li,{children:"center"}),"\n",(0,s.jsx)(i.li,{children:"hovered (the cursor position of hovered file)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"offset",children:"Offset"}),"\n",(0,s.jsxs)(i.p,{children:["As for the offset, it's a 4-element tuple: ",(0,s.jsx)(i.code,{children:"(x, y, width, height)"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"placeholder",children:"Placeholder"}),"\n",(0,s.jsx)(i.p,{children:"Some inputs have special placeholders that will be replaced with actual content on display:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"trash_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of files to be trashed"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"delete_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of files to be deleted"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"find_title: [String, String]"}),"\n",(0,s.jsx)(i.p,{children:'It\'s a tuple of 2-element: first for "Find next", second for "Find previous".'}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"search_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Name of the current search engine"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"shell_title: [String, String]"}),"\n",(0,s.jsx)(i.p,{children:'It\'s a tuple of 2-element: first for "Non-blocking shell", second for "Blocking shell".'}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"quit_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of tasks are running"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"select",children:"[select]"}),"\n",(0,s.jsxs)(i.p,{children:["Same as ",(0,s.jsx)(i.a,{href:"#input",children:"the input"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"which",children:"[which]"}),"\n",(0,s.jsx)(i.h3,{id:"sort_by-1",children:(0,s.jsx)(i.code,{children:"sort_by"})}),"\n",(0,s.jsx)(i.p,{children:"Candidate sorting method."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": Don't sort."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"key"'}),": Sort by key."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"desc'}),": Sort by description."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_sensitive-1",children:(0,s.jsx)(i.code,{children:"sort_sensitive"})}),"\n",(0,s.jsx)(i.p,{children:"Sort case-sensitively."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Case-sensitive"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Case-insensitive"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"sort_reverse-1",children:(0,s.jsx)(i.code,{children:"sort_reverse"})}),"\n",(0,s.jsx)(i.p,{children:"Display candidates in reverse order."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Reverse order"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Normal order"]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6225:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>d});var s=n(959);const r={},l=s.createContext(r);function d(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);