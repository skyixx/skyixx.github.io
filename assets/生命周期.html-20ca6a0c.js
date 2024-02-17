import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as t}from"./app-a7e5bcc2.js";const e={},p=t(`<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><ul><li>Rust 的每个引用都有自己的生命周期</li><li>生命周期: 引用保持有效的作用域</li><li>大多数情况: 生命周期是隐式的,可被推断的</li><li>当引用的生命周期可能以不同的方式互相关联时: 手动标注生命周期</li></ul><h2 id="生命周期存在的意义" tabindex="-1"><a class="header-anchor" href="#生命周期存在的意义" aria-hidden="true">#</a> 生命周期存在的意义:</h2><ul><li><p>避免悬垂引用</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>  <span class="token keyword">let</span> r<span class="token punctuation">;</span>
  <span class="token punctuation">{</span>
      <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      r <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h1><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">notify</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token operator">&gt;</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Typename</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    ins<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token class-name">Example</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">func</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span> <span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token class-name">String</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 输出的生命周期是&amp;self的</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">&amp;</span><span class="token class-name">String</span> <span class="token comment">// also</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生命周期省略规则" tabindex="-1"><a class="header-anchor" href="#生命周期省略规则" aria-hidden="true">#</a> 生命周期省略规则:</h1><ul><li>规则 1: 每个引用类型都有自己的生命周期</li><li>规则 2: 如果只有一个生命周期参数,那么该生命周期会赋给所有的输出的生命周期</li><li>规则 3: 如果有输入多个生命周期参数,但其中一个是<code>&amp;self</code> or <code>&amp;mut self</code>,那么<code>self</code>的生命周期会赋值给所有输出的生命周期</li></ul><h1 id="静态生命周期" tabindex="-1"><a class="header-anchor" href="#静态生命周期" aria-hidden="true">#</a> 静态生命周期</h1><ul><li><code>&#39;static</code> 所有字符串切片的生命周期</li></ul>`,10),o=[p];function l(c,i){return a(),s("div",null,o)}const d=n(e,[["render",l],["__file","生命周期.html.vue"]]);export{d as default};
