"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[871],{2324:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=l(1527),s=l(6225);const r={sidebar_position:3,description:"Learn how to configure your Yazi theme."},t="theme.toml",c={id:"configuration/theme",title:"theme.toml",description:"Learn how to configure your Yazi theme.",source:"@site/docs/configuration/theme.md",sourceDirName:"configuration",slug:"/configuration/theme",permalink:"/docs/configuration/theme",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/configuration/theme.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn how to configure your Yazi theme."},sidebar:"docsSidebar",previous:{title:"keymap.toml",permalink:"/docs/configuration/keymap"},next:{title:"Image Preview",permalink:"/docs/image-preview"}},d={},o=[{value:"Types",id:"types",level:2},{value:"Color",id:"color",level:3},{value:"Style",id:"style",level:3},{value:"[manager]",id:"manager",level:2},{value:"[status]",id:"status",level:2},{value:"[select]",id:"select",level:2},{value:"[input]",id:"input",level:2},{value:"[completion]",id:"completion",level:2},{value:"[tasks]",id:"tasks",level:2},{value:"[which]",id:"which",level:2},{value:"[help]",id:"help",level:2},{value:"[filetype]",id:"filetype",level:2},{value:"[icon]",id:"icon",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"themetoml",children:"theme.toml"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you're looking for ready-made themes and don't want to create one yourself, check out the ",(0,i.jsx)(n.a,{href:"https://github.com/yazi-rs/themes",children:"yazi-rs/themes"})," repository."]})}),"\n",(0,i.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,i.jsx)(n.h3,{id:"color",children:"Color"}),"\n",(0,i.jsxs)(n.p,{children:["A color. It can be in Hex format with RGB values, such as ",(0,i.jsx)(n.code,{children:"#484D66"}),". Or can be one of the following 17 values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"reset"}),"\n",(0,i.jsx)(n.li,{children:"black"}),"\n",(0,i.jsx)(n.li,{children:"white"}),"\n",(0,i.jsx)(n.li,{children:"red"}),"\n",(0,i.jsx)(n.li,{children:"lightred"}),"\n",(0,i.jsx)(n.li,{children:"green"}),"\n",(0,i.jsx)(n.li,{children:"lightgreen"}),"\n",(0,i.jsx)(n.li,{children:"yellow"}),"\n",(0,i.jsx)(n.li,{children:"lightyellow"}),"\n",(0,i.jsx)(n.li,{children:"blue"}),"\n",(0,i.jsx)(n.li,{children:"lightblue"}),"\n",(0,i.jsx)(n.li,{children:"magenta"}),"\n",(0,i.jsx)(n.li,{children:"lightmagenta"}),"\n",(0,i.jsx)(n.li,{children:"cyan"}),"\n",(0,i.jsx)(n.li,{children:"lightcyan"}),"\n",(0,i.jsx)(n.li,{children:"gray"}),"\n",(0,i.jsx)(n.li,{children:"darkgray"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"style",children:"Style"}),"\n",(0,i.jsxs)(n.p,{children:["Appears in a format similar to ",(0,i.jsx)(n.code,{children:'{ fg = "#e4e4e4", bg = "black", ... }'}),", and supports the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fg (Color): Foreground color"}),"\n",(0,i.jsx)(n.li,{children:"bg (Color): Background color"}),"\n",(0,i.jsx)(n.li,{children:"bold (Boolean): Bold"}),"\n",(0,i.jsx)(n.li,{children:"dim (Boolean): Dim (not supported by all terminals)"}),"\n",(0,i.jsx)(n.li,{children:"italic (Boolean): Italic"}),"\n",(0,i.jsx)(n.li,{children:"underline (Boolean): Underline"}),"\n",(0,i.jsx)(n.li,{children:"blink (Boolean): Blink"}),"\n",(0,i.jsx)(n.li,{children:"blink_rapid (Boolean): Rapid blink"}),"\n",(0,i.jsx)(n.li,{children:"reversed (Boolean): Reversed foreground and background colors"}),"\n",(0,i.jsx)(n.li,{children:"hidden (Boolean): Hidden"}),"\n",(0,i.jsx)(n.li,{children:"crossed (Boolean): Crossed out"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manager",children:"[manager]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cwd (Style): CWD text style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hovered:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hovered (Style): Hovered file style."}),"\n",(0,i.jsx)(n.li,{children:"preview_hovered (Style): Hovered file style, in the preview pane."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Find: The ",(0,i.jsx)(n.code,{children:"find"})," feature"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"find_keyword (Style): Style of the highlighted portion in the filename."}),"\n",(0,i.jsx)(n.li,{children:"find_position (Style): Style of current file location in all found files to the right of the filename."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Marker: Color block on the left side separator line in the filename."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"marker_selected (Style): Selected file marker style."}),"\n",(0,i.jsx)(n.li,{children:"marker_copied (Style): Copied file marker style."}),"\n",(0,i.jsx)(n.li,{children:"marker_cut (Style): Cut file marker style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tab: Tab bar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tab_active (Style): Active tab style."}),"\n",(0,i.jsx)(n.li,{children:"tab_inactive (Style): Inactive tab style."}),"\n",(0,i.jsx)(n.li,{children:"tab_width (Number): Tab maximum width. When set to a value greater than 2, the remaining space will be filled with the tab name, which is current directory name."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Border:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["border_symbol (String): Border symbol. e.g. ",(0,i.jsx)(n.code,{children:'"\u2502"'}),"."]}),"\n",(0,i.jsx)(n.li,{children:"border_style (Style): Border style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Highlighting: The built-in syntax highlighting feature"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['syntect_theme (String): Theme file path ending with ".tmTheme", used by syntect. e.g. ',(0,i.jsx)(n.code,{children:'"~/my-themes/Dracula.tmTheme"'}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Yazi and ",(0,i.jsx)(n.code,{children:"bat"})," use the same highlighter ",(0,i.jsx)(n.a,{href:"https://crates.io/crates/syntect",children:"syntect"}),", so you can directly use ",(0,i.jsx)(n.a,{href:"https://github.com/sharkdp/bat/tree/master/assets/themes",children:"bat's theme files"}),'.\nYou can also find more available themes on GitHub by using the keyword "tmTheme".']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"[status]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["separator_open (String): Opening separator symbol. e.g. ",(0,i.jsx)(n.code,{children:'"["'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["separator_close (String): Closing separator symbol. e.g. ",(0,i.jsx)(n.code,{children:'"]"'}),"."]}),"\n",(0,i.jsx)(n.li,{children:"separator_style (Style): Separator style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mode_normal (Style): Normal mode style."}),"\n",(0,i.jsx)(n.li,{children:"mode_select (Style): Select mode style."}),"\n",(0,i.jsx)(n.li,{children:"mode_unset (Style): Unset mode style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Progress"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"progress_label (Style): Progress label style."}),"\n",(0,i.jsx)(n.li,{children:"progress_normal (Style): Style of the progress bar when it is not in an error state."}),"\n",(0,i.jsx)(n.li,{children:"progress_error (Style): Style of the progress bar when an error occurs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Permissions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"permissions_t (Style): File type."}),"\n",(0,i.jsx)(n.li,{children:"permissions_r (Style): Read permission."}),"\n",(0,i.jsx)(n.li,{children:"permissions_w (Style): Write permission."}),"\n",(0,i.jsx)(n.li,{children:"permissions_x (Style): Execute permission."}),"\n",(0,i.jsxs)(n.li,{children:["permissions_s (Style): ",(0,i.jsx)(n.code,{children:"-"})," separator."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"select",children:"[select]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"border (Style): Border style."}),"\n",(0,i.jsx)(n.li,{children:"active (Style): Selected item style."}),"\n",(0,i.jsx)(n.li,{children:"inactive (Style): Unselected item style."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"input",children:"[input]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"border (Style): Border style."}),"\n",(0,i.jsx)(n.li,{children:"title (Style): Title style."}),"\n",(0,i.jsx)(n.li,{children:"value (Style): Value style."}),"\n",(0,i.jsx)(n.li,{children:"selected (Style): Selected value style."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"completion",children:"[completion]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"border (Style): Border style."}),"\n",(0,i.jsx)(n.li,{children:"active (Style): Selected item style."}),"\n",(0,i.jsx)(n.li,{children:"inactive (Style): Unselected item style."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Icons"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"icon_file (String): File icon."}),"\n",(0,i.jsx)(n.li,{children:"icon_folder (String): Folder icon."}),"\n",(0,i.jsx)(n.li,{children:"icon_command (String): Command icon."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tasks",children:"[tasks]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"border (Style): Border style."}),"\n",(0,i.jsx)(n.li,{children:"title (Style): Title style."}),"\n",(0,i.jsx)(n.li,{children:"hovered (Style): Hovered item style."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"which",children:"[which]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["cols (Number): Number of columns. The value can be ",(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"2"}),", ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"mask (Style): Mask style."}),"\n",(0,i.jsx)(n.li,{children:"cand (Style): Candidate key style."}),"\n",(0,i.jsx)(n.li,{children:"rest (Style): Rest key style."}),"\n",(0,i.jsx)(n.li,{children:"desc (Style): Description style."}),"\n",(0,i.jsxs)(n.li,{children:["separator (String): Separator symbol. e.g. ",(0,i.jsx)(n.code,{children:'" -> "'}),"."]}),"\n",(0,i.jsx)(n.li,{children:"separator_style (Style): Separator style."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"[help]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"on (Style): Key column style."}),"\n",(0,i.jsx)(n.li,{children:"exec (Style): Command column style."}),"\n",(0,i.jsx)(n.li,{children:"desc (Style): Description column style."}),"\n",(0,i.jsx)(n.li,{children:"hovered (Style): Hovered item style."}),"\n",(0,i.jsx)(n.li,{children:"footer (Style): Footer style."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"filetype",children:"[filetype]"}),"\n",(0,i.jsx)(n.p,{children:"Set file list item display styles for specific file types, supporting matching by name and mime-type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[filetype]\nrules = [\n\t# Images\n\t{ mime = "image/*", fg = "cyan" },\n\n\t# Videos\n\t{ mime = "video/*", fg = "yellow" },\n\t{ mime = "audio/*", fg = "yellow" },\n\n\t# Orphan symbolic links\n\t{ name = "*", is = "orphan", fg = "red" },\n\n\t# ...\n\n\t# Fallback\n\t# { name = "*", fg = "white" },\n\t{ name = "*/", fg = "blue" }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Each rule supports complete ",(0,i.jsx)(n.a,{href:"#style",children:"Style properties"}),". There are two special rule:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'name = "*"'})," matches all files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'name = "*/"'})," matches all directories."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can restrict the specific type of files through ",(0,i.jsx)(n.code,{children:"is"}),", noting that it must be used with either ",(0,i.jsx)(n.code,{children:"name"})," or ",(0,i.jsx)(n.code,{children:"mime"}),". It accepts the following values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block"}),": Block device"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"char"}),": Char device"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exec"}),": Executable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fifo"}),": FIFO"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"link"}),": Symbolic link"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"orphan"}),": Orphan symbolic link"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sock"}),": Socket"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sticky"}),": File with sticky bit set"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"icon",children:"[icon]"}),"\n",(0,i.jsx)(n.p,{children:"Display icon based on the first matched rule."}),"\n",(0,i.jsxs)(n.p,{children:["You can prepend or append rules to the default through ",(0,i.jsx)(n.code,{children:"prepend_rules"})," and ",(0,i.jsx)(n.code,{children:"append_rules"}),", see ",(0,i.jsx)(n.a,{href:"/docs/configuration/overview#configuration-mixing",children:"Configuration mixing"})," for details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[icon]\nprepend_rules = [\n\t{ name = "*.rs"    , text = "\ue7a8" },\n\t{ name = "Desktop/", text = "\uf108" },\n\t# ...\n\n\t# Icon with a color\n\t{ name = "*.lua", text = "\ue620", fg = "#51a0cf" },\n\n\t# You can also use `is` rule, just like `[filetype]` section\n\t# Orphan symbolic links\n\t{ name = "*", is = "orphan", text = "\uf071" },\n]\n\nappend_rules = [\n\t# My fallback icons\n\t{ name = "*" , text = "\uf15b" },\n\t{ name = "*/", text = "\uf115" },\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Or, use ",(0,i.jsx)(n.code,{children:"rules"})," to rewrite the entire default rules:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[icon]\nrules = [\n\t# ...Some rules\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["End with ",(0,i.jsx)(n.code,{children:"/"})," for directories, so wildcard rule (",(0,i.jsx)(n.code,{children:"*"})," or ",(0,i.jsx)(n.code,{children:"*/"}),") can be used for fallback matching all files or directories."]}),"\n",(0,i.jsxs)(n.p,{children:["If your ",(0,i.jsx)(n.code,{children:"append_rules"})," contains wildcard rules, they will always take precedence over the default wildcard rules as the fallback."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6225:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>t});var i=l(959);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);