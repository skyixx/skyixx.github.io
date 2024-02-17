const t=JSON.parse('{"key":"v-2a64ab4e","path":"/Notebook/Rust/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html","title":"生命周期","lang":"zh-CN","frontmatter":{"title":"生命周期","category":["笔记","Rust"],"description":"生命周期 Rust 的每个引用都有自己的生命周期 生命周期: 引用保持有效的作用域 大多数情况: 生命周期是隐式的,可被推断的 当引用的生命周期可能以不同的方式互相关联时: 手动标注生命周期 生命周期存在的意义: 避免悬垂引用 let r; { let x = 1; r = &amp;x; } println!(\\"{}\\", x)","head":[["meta",{"property":"og:url","content":"https://skyixx.github.io/Notebook/Rust/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"}],["meta",{"property":"og:site_name","content":"ColorSky"}],["meta",{"property":"og:title","content":"生命周期"}],["meta",{"property":"og:description","content":"生命周期 Rust 的每个引用都有自己的生命周期 生命周期: 引用保持有效的作用域 大多数情况: 生命周期是隐式的,可被推断的 当引用的生命周期可能以不同的方式互相关联时: 手动标注生命周期 生命周期存在的意义: 避免悬垂引用 let r; { let x = 1; r = &amp;x; } println!(\\"{}\\", x)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-29T06:38:08.000Z"}],["meta",{"property":"article:author","content":"ColorSky"}],["meta",{"property":"article:modified_time","content":"2023-08-29T06:38:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生命周期\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T06:38:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ColorSky\\",\\"url\\":\\"https://ColorSky.fun\\"}]}"]]},"headers":[{"level":2,"title":"生命周期存在的意义:","slug":"生命周期存在的意义","link":"#生命周期存在的意义","children":[]}],"git":{"createdTime":1693243182000,"updatedTime":1693291088000,"contributors":[{"name":"skyixx","email":"ningstars@outlook.com","commits":2}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"Notebook/Rust/生命周期.md","localizedDate":"2023年8月28日","excerpt":"<h1> 生命周期</h1>\\n<ul>\\n<li>Rust 的每个引用都有自己的生命周期</li>\\n<li>生命周期: 引用保持有效的作用域</li>\\n<li>大多数情况: 生命周期是隐式的,可被推断的</li>\\n<li>当引用的生命周期可能以不同的方式互相关联时: 手动标注生命周期</li>\\n</ul>\\n<h2> 生命周期存在的意义:</h2>\\n<ul>\\n<li>\\n<p>避免悬垂引用</p>\\n<div class=\\"language-rust line-numbers-mode\\" data-ext=\\"rs\\"><pre class=\\"language-rust\\"><code>  <span class=\\"token keyword\\">let</span> r<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n      r <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>x<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"{}\\"</span><span class=\\"token punctuation\\">,</span> x<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{t as data};
