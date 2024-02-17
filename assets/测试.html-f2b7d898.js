import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,a as n}from"./app-a7e5bcc2.js";const t={},l=n(`<h1 id="测试函数" tabindex="-1"><a class="header-anchor" href="#测试函数" aria-hidden="true">#</a> 测试函数</h1><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">tests</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试失败的条件: 发生<code>panic!</code></li></ul><p>控制台输入<code>cargo test</code>即可测试标注的所有测试函数</p><h1 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h1><ul><li><p><code>assert!</code></p><ul><li>确认某个状态是否为 True</li><li>True: 通过</li><li>False: panic!</li></ul></li><li><p>判断 2 个值是否相等</p><ul><li><code>assert_eq!</code>: 相等</li><li><code>assert_ne!</code>: 不相等</li><li>相等: 通过</li><li>不相等: 打印 left 和 right 的值</li></ul></li><li><p>自定义错误信息</p><ul><li><code>assert!</code>: 在第二个参数输入</li><li><code>assert_eq!</code>&amp;<code>assert_ne!</code>: 第三个参数输入</li><li>在自定义信息后面可以加入参数,这些参数会被<code>format!</code>拼接<div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token macro property">assert!</span><span class="token punctuation">(</span><span class="token class-name">False</span><span class="token punctuation">,</span> <span class="token string">&quot;error info: {}, {}&quot;</span><span class="token punctuation">,</span> info_1<span class="token punctuation">,</span> info_2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><code>should_panic!</code>: 编写代码是否在特定条件下发生恐慌<br> 如果发生<code>panic!</code>则测试函数通过</p><ul><li>可选的<code>ecpected</code>参数: 检查失败的消息中是否有包含指定的文字</li></ul></li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token attribute attr-name">#[should_panic(expected = <span class="token string">&quot;the message&quot;</span>)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="在测试中使用result-t-e" tabindex="-1"><a class="header-anchor" href="#在测试中使用result-t-e" aria-hidden="true">#</a> 在测试中使用<code>Result&lt;T, E&gt;</code></h1><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="控制测试的运行方式" tabindex="-1"><a class="header-anchor" href="#控制测试的运行方式" aria-hidden="true">#</a> 控制测试的运行方式</h1><ul><li><p>改变<code>cargo test</code>的测试行为</p></li><li><p>默认行为</p><ul><li>并行运行</li><li>所有测试</li><li>捕获(不显示)所有输出,使读写与测试相关的输出更容易</li></ul></li><li><p>命令行参数:</p><ul><li>针对<code>cargo test</code>的参数: 紧跟<code>cargo test</code>后</li><li>针对测试可执行文件的程序: 放在<code>--</code>后<br><code>cargo test --help</code>, <code>cargo test -- --help</code></li></ul></li><li><p>并行运行测试</p></li></ul>`,11),i=[l];function c(o,p){return s(),e("div",null,i)}const u=a(t,[["render",c],["__file","测试.html.vue"]]);export{u as default};
