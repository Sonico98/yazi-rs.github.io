"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[307],{3924:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(1527),t=r(6225),a=r(1754);const s={sidebar_position:7,description:"A few helpful tips for using Yazi."},o="Tips",l={id:"tips",title:"Tips",description:"A few helpful tips for using Yazi.",source:"@site/docs/tips.md",sourceDirName:".",slug:"/tips",permalink:"/docs/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/tips.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"A few helpful tips for using Yazi."},sidebar:"docsSidebar",previous:{title:"Flavors (WIP)",permalink:"/docs/flavors/overview"},next:{title:"Resources",permalink:"/docs/resources"}},d={},c=[{value:"Full border",id:"full-border",level:2},{value:"Dropping to the shell",id:"dropping-to-the-shell",level:2},{value:"Close input by once <code>&lt;Esc&gt;</code> press",id:"close-input-by-once-esc-press",level:2},{value:"Smart enter: <code>enter</code> for directory, <code>open</code> for file",id:"smart-enter-enter-for-directory-open-for-file",level:2},{value:"Drag and drop via <code>dragon</code>",id:"drag-and-drop-via-dragon",level:2},{value:"Copy selected files to the system clipboard while yanking",id:"copy-selected-files-to-the-system-clipboard-while-yanking",level:2},{value:"File navigation wraparound",id:"file-navigation-wraparound",level:2},{value:"No status bar",id:"no-status-bar",level:2},{value:"Show symlink in status bar",id:"show-symlink-in-status-bar",level:2},{value:"Show user/group of files in status bar",id:"show-usergroup-of-files-in-status-bar",level:2},{value:"Show username and hostname in header",id:"show-username-and-hostname-in-header",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tips",children:"Tips"}),"\n",(0,i.jsx)(n.p,{children:"These tips require prior knowledge of the Yazi configuration file."}),"\n",(0,i.jsxs)(n.p,{children:["If you are using Yazi for the first time, please read our ",(0,i.jsx)(n.a,{href:"/docs/configuration/overview",children:"configuration"})," and ",(0,i.jsx)(n.a,{href:"/docs/plugins/overview",children:"plugins"})," documentation first."]}),"\n",(0,i.jsx)(n.h2,{id:"full-border",children:"Full border"}),"\n",(0,i.jsx)(n.p,{children:"You can implement a full border for Yazi via the UI plugin."}),"\n",(0,i.jsx)("img",{src:(0,a.Z)("/img/full-border.png"),width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/v0.2.3/yazi-plugin/preset/components/manager.lua",children:[(0,i.jsx)(n.code,{children:"Manager:render"})," method"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.em,{children:"only"})})," to your ",(0,i.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),", then apply the following patch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'@@ -18,16 +18,28 @@\nfunction Manager:render(area)\n\tlocal chunks = self:layout(area)\n\n+\tlocal bar = function(c, x, y)\n+\t\tx, y = math.max(0, x), math.max(0, y)\n+\t\treturn ui.Bar(ui.Rect { x = x, y = y, w = ya.clamp(0, area.w - x, 1), h = math.min(1, area.h) }, ui.Bar.TOP)\n+\t\t\t:symbol(c)\n+\tend\n+\n \treturn ya.flat {\n \t\t-- Borders\n-\t\tui.Bar(chunks[1], ui.Bar.RIGHT):symbol(THEME.manager.border_symbol):style(THEME.manager.border_style),\n-\t\tui.Bar(chunks[3], ui.Bar.LEFT):symbol(THEME.manager.border_symbol):style(THEME.manager.border_style),\n+\t\tui.Border(area, ui.Border.ALL):type(ui.Border.ROUNDED),\n+\t\tui.Bar(chunks[1], ui.Bar.RIGHT),\n+\t\tui.Bar(chunks[3], ui.Bar.LEFT),\n\n+\t\tbar("\u252c", chunks[1].right - 1, chunks[1].y),\n+\t\tbar("\u2534", chunks[1].right - 1, chunks[1].bottom - 1),\n+\t\tbar("\u252c", chunks[2].right, chunks[2].y),\n+\t\tbar("\u2534", chunks[2].right, chunks[1].bottom - 1),\n+\n \t\t-- Parent\n-\t\tParent:render(chunks[1]:padding(ui.Padding.x(1))),\n+\t\tParent:render(chunks[1]:padding(ui.Padding.xy(1))),\n \t\t-- Current\n-\t\tCurrent:render(chunks[2]),\n+\t\tCurrent:render(chunks[2]:padding(ui.Padding.y(1))),\n \t\t-- Preview\n-\t\tPreview:render(chunks[3]:padding(ui.Padding.x(1))),\n+\t\tPreview:render(chunks[3]:padding(ui.Padding.xy(1))),\n \t}\n end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you prefer sharp corners for the border, you can remove ",(0,i.jsx)(n.code,{children:":type(ui.Border.ROUNDED)"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"dropping-to-the-shell",children:"Dropping to the shell"}),"\n",(0,i.jsxs)(n.p,{children:["Add the keybindings to your ",(0,i.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = [ "<C-s>" ]\nexec = \'shell "$SHELL" --block --confirm\'\ndesc = "Open shell here"\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"close-input-by-once-esc-press",children:["Close input by once ",(0,i.jsx)(n.code,{children:"<Esc>"})," press"]}),"\n",(0,i.jsxs)(n.p,{children:["You can change the ",(0,i.jsx)(n.code,{children:"<Esc>"})," of input component from the default ",(0,i.jsx)(n.code,{children:"escape"})," to ",(0,i.jsx)(n.code,{children:"close"})," command, in your ",(0,i.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[input.prepend_keymap]]\non   = [ "<Esc>" ]\nexec = "close"\ndesc = "Cancel input"\n'})}),"\n",(0,i.jsx)(n.p,{children:"to exiting input directly, without entering Vi mode, making it behave like a regular input box."}),"\n",(0,i.jsxs)(n.h2,{id:"smart-enter-enter-for-directory-open-for-file",children:["Smart enter: ",(0,i.jsx)(n.code,{children:"enter"})," for directory, ",(0,i.jsx)(n.code,{children:"open"})," for file"]}),"\n",(0,i.jsxs)(n.p,{children:["Save these lines as ",(0,i.jsx)(n.code,{children:"~/.config/yazi/plugins/smart-enter.yazi/init.lua"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'return {\n\tentry = function()\n\t\tlocal h = cx.active.current.hovered\n\t\tya.manager_emit(h and h.cha.is_dir and "enter" or "open", {})\n\tend,\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then bind it for ",(0,i.jsx)(n.code,{children:"l"})," key, in your ",(0,i.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = [ "l" ]\nexec = "plugin --sync smart-enter"\ndesc = "Enter the child directory, or open the file"\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"drag-and-drop-via-dragon",children:["Drag and drop via ",(0,i.jsx)(n.a,{href:"https://github.com/mwh/dragon",children:(0,i.jsx)(n.code,{children:"dragon"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Original post: ",(0,i.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/discussions/327",children:"https://github.com/sxyazi/yazi/discussions/327"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non   = [ \"<C-n>\" ]\nexec = '''\n\tshell 'dragon -x -i -T \"$1\"' --confirm\n'''\n"})}),"\n",(0,i.jsx)(n.h2,{id:"copy-selected-files-to-the-system-clipboard-while-yanking",children:"Copy selected files to the system clipboard while yanking"}),"\n",(0,i.jsxs)(n.p,{children:["Yazi allows multiple commands to be bound to a single key, so you can set ",(0,i.jsx)(n.code,{children:"y"})," to not only do the ",(0,i.jsx)(n.code,{children:"yank"})," but also execute a shell script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non   = [ \"y\" ]\nexec = [ \"yank\", '''\n\tshell --confirm 'echo \"$@\" | xclip -i -selection clipboard -t text/uri-list'\n''' ]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above is available on X11, there is also a Wayland version (Thanks ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/1136203602898194542/1136203604076802092/1188498323867455619",children:"@hurutparittya for sharing this"})," in Yazi's discord server):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non   = [ \"y\" ]\nexec = [ \"yank\", '''\n\tshell --confirm 'for path in \"$@\"; do echo \"file://$path\"; done | wl-copy -t text/uri-list'\n''' ]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"file-navigation-wraparound",children:"File navigation wraparound"}),"\n",(0,i.jsxs)(n.p,{children:["Save these lines as ",(0,i.jsx)(n.code,{children:"~/.config/yazi/plugins/arrow.yazi/init.lua"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'return {\n\tentry = function(_, args)\n\t\tlocal current = cx.active.current\n\t\tlocal new = (current.cursor + args[1]) % #current.files\n\t\tya.manager_emit("arrow", { new - current.cursor })\n\tend,\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then bind it for ",(0,i.jsx)(n.code,{children:"k"})," and ",(0,i.jsx)(n.code,{children:"j"})," key, in your ",(0,i.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = [ "k" ]\nexec = "plugin --sync arrow --args=-1"\n\n[[manager.prepend_keymap]]\non   = [ "j" ]\nexec = "plugin --sync arrow --args=1"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"no-status-bar",children:"No status bar"}),"\n",(0,i.jsx)("img",{src:(0,a.Z)("/img/no-status-bar.jpg"),width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["Add these lines to your ",(0,i.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function Status:render() return {} end\n\nlocal old_manager_render = Manager.render\nfunction Manager:render(area)\n\treturn old_manager_render(self, ui.Rect { x = area.x, y = area.y, w = area.w, h = area.h + 1 })\nend\n"})}),"\n",(0,i.jsx)(n.h2,{id:"show-symlink-in-status-bar",children:"Show symlink in status bar"}),"\n",(0,i.jsx)("img",{src:(0,a.Z)("/img/symlink-in-status.png"),width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-plugin/preset/components/status.lua",children:[(0,i.jsx)(n.code,{children:"Status:name()"})," method"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.em,{children:"only"})})," to your ",(0,i.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),", and apply the following patch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'@@ -42,7 +42,11 @@ function Status:name()\n \t\treturn ui.Span("")\n \tend\n\n-\treturn ui.Span(" " .. h.name)\n+\tlocal linked = ""\n+\tif h.link_to ~= nil then\n+\t\tlinked = " -> " .. tostring(h.link_to)\n+\tend\n+\treturn ui.Span(" " .. h.name .. linked)\n end\n'})}),"\n",(0,i.jsx)(n.h2,{id:"show-usergroup-of-files-in-status-bar",children:"Show user/group of files in status bar"}),"\n",(0,i.jsx)("img",{src:(0,a.Z)("/img/owner.png"),width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-plugin/preset/components/status.lua",children:[(0,i.jsx)(n.code,{children:"Status:render()"})," method"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.em,{children:"only"})})," to your ",(0,i.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),", and apply the following patch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'@@ -1,8 +1,22 @@\n+function Status:owner()\n+\tlocal h = cx.active.current.hovered\n+\tif h == nil or ya.target_family() ~= "unix" then\n+\t\treturn ui.Line {}\n+\tend\n+\n+\treturn ui.Line {\n+\t\tui.Span(ya.user_name(h.cha.uid) or tostring(h.cha.uid)):fg("magenta"),\n+\t\tui.Span(":"),\n+\t\tui.Span(ya.group_name(h.cha.gid) or tostring(h.cha.gid)):fg("magenta"),\n+\t\tui.Span(" "),\n+\t}\n+end\n+\n function Status:render(area)\n \tself.area = area\n\n \tlocal left = ui.Line { self:mode(), self:size(), self:name() }\n-\tlocal right = ui.Line { self:permissions(), self:percentage(), self:position() }\n+\tlocal right = ui.Line { self:owner(), self:permissions(), self:percentage(), self:position() }\n \treturn {\n \t\tui.Paragraph(area, { left }),\n'})}),"\n",(0,i.jsx)(n.h2,{id:"show-username-and-hostname-in-header",children:"Show username and hostname in header"}),"\n",(0,i.jsx)("img",{src:(0,a.Z)("/img/hostname-in-header.png"),width:"600"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-plugin/preset/components/header.lua",children:[(0,i.jsx)(n.code,{children:"Header:render()"})," method"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.em,{children:"only"})})," to your ",(0,i.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),", and apply the following patch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'@@ -1,3 +1,10 @@\n+function Header:host()\n+\tif ya.target_family() ~= "unix" then\n+\t\treturn ui.Line {}\n+\tend\n+\treturn ui.Span(ya.user_name() .. "@" .. ya.host_name() .. ":"):fg("blue")\n+end\n+\n function Header:render(area)\n \tself.area = area\n\n@@ -6,7 +13,7 @@\n \t\t:constraints({ ui.Constraint.Percentage(50), ui.Constraint.Percentage(50) })\n \t\t:split(area)\n\n-\tlocal left = ui.Line { self:cwd() }\n+\tlocal left = ui.Line { self:host(), self:cwd() }\n \tlocal right = ui.Line { self:tabs() }\n \treturn {\n \t\tui.Paragraph(chunks[1], { left }),\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6225:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var i=r(959);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);