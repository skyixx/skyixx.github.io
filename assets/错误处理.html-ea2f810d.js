const t=JSON.parse(`{"key":"v-245d5dcf","path":"/Notebook/Rust/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html","title":"错误处理","lang":"zh-CN","frontmatter":{"title":"错误处理","category":["笔记","Rust"],"description":"错误的分类 可恢复 列如文件未找到，可再次尝试 应对机制：Result&lt;T, E&gt; 不可恢复 Bug，列如访问的索引超出范围 应对机制：panic! 程序立即终止执行 panic! - 不可恢复的错误 当 panic!执行时 程序答应错误信息 展开，清理调用栈 Rust 会展开调用栈（工作量大） Rust 沿着调用栈往回走 清理每个遇到的的函数的数据 立即终止调用栈 不进行清理，直接停止程序 内存需要操作系统清理 想让二进制文件更小可以把展开设置为终止 在 Cargo.toml 中设置[profile.release] panic = 'abort' 退出程序","head":[["meta",{"property":"og:url","content":"https://skyixx.github.io/Notebook/Rust/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"ColorSky"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:description","content":"错误的分类 可恢复 列如文件未找到，可再次尝试 应对机制：Result&lt;T, E&gt; 不可恢复 Bug，列如访问的索引超出范围 应对机制：panic! 程序立即终止执行 panic! - 不可恢复的错误 当 panic!执行时 程序答应错误信息 展开，清理调用栈 Rust 会展开调用栈（工作量大） Rust 沿着调用栈往回走 清理每个遇到的的函数的数据 立即终止调用栈 不进行清理，直接停止程序 内存需要操作系统清理 想让二进制文件更小可以把展开设置为终止 在 Cargo.toml 中设置[profile.release] panic = 'abort' 退出程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-29T06:38:08.000Z"}],["meta",{"property":"article:author","content":"ColorSky"}],["meta",{"property":"article:modified_time","content":"2023-08-29T06:38:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T06:38:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ColorSky\\",\\"url\\":\\"https://ColorSky.fun\\"}]}"]]},"headers":[],"git":{"createdTime":1691998057000,"updatedTime":1693291088000,"contributors":[{"name":"skyixx","email":"ningstars@outlook.com","commits":5}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"Notebook/Rust/错误处理.md","localizedDate":"2023年8月14日","excerpt":"<h1> 错误的分类</h1>\\n<ul>\\n<li>可恢复\\n<ul>\\n<li>列如文件未找到，可再次尝试</li>\\n<li>应对机制：<code>Result&lt;T, E&gt;</code></li>\\n</ul>\\n</li>\\n<li>不可恢复\\n<ul>\\n<li>Bug，列如访问的索引超出范围</li>\\n<li>应对机制：<code>panic!</code> 程序立即终止执行</li>\\n</ul>\\n</li>\\n</ul>\\n<h1> panic! - 不可恢复的错误</h1>\\n<ul>\\n<li>当 panic!执行时\\n<ul>\\n<li>程序答应错误信息</li>\\n<li>展开，清理调用栈\\n<ol>\\n<li>Rust 会展开调用栈（工作量大）\\n<ul>\\n<li>Rust 沿着调用栈往回走</li>\\n<li>清理每个遇到的的函数的数据</li>\\n</ul>\\n</li>\\n<li>立即终止调用栈\\n<ul>\\n<li>不进行清理，直接停止程序</li>\\n<li>内存需要操作系统清理</li>\\n<li></li>\\n</ul>\\n</li>\\n</ol>\\n<ul>\\n<li>想让二进制文件更小可以把展开设置为终止<br>\\n在 Cargo.toml 中设置<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>[profile.release]\\npanic = 'abort'\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>退出程序</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
