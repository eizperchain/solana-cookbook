import{_ as e,r as c,o,c as i,a as n,b as s,F as r,e as l,d as t}from"./app.28f6b3e6.js";const p={},h=l(`<h1 id="soat-loi-chuong-trinh-tren-solana" tabindex="-1"><a class="header-anchor" href="#soat-loi-chuong-trinh-tren-solana" aria-hidden="true">#</a> So\xE1t l\u1ED7i ch\u01B0\u01A1ng tr\xECnh tr\xEAn Solana</h1><p>C\xF3 m\u1ED9t v\xE0i l\u1EF1a ch\u1ECDn v\xE0 c\xF4ng c\u1EE5 h\u1ED7 tr\u1EE3 cho vi\u1EC7c ki\u1EC3m th\u1EED v\xE0 so\xE1t l\u1ED7i m\u1ED9t ch\u01B0\u01A1ng tr\xECnh tr\xEAn Solana.</p><h2 id="co-the-ban-chua-biet" tabindex="-1"><a class="header-anchor" href="#co-the-ban-chua-biet" aria-hidden="true">#</a> C\xF3 th\u1EC3 b\u1EA1n ch\u01B0a bi\u1EBFt</h2><div class="custom-container tip"><p class="custom-container-title">Nh\u1EEFng \u0111i\u1EC1u c\xF3 th\u1EC3 b\u1EA1n ch\u01B0a bi\u1EBFt</p><ul><li>Crate <code>solana-program-test</code> cho ph\xE9p t\u1EA1o n\xEAn m\u1ED9t m\xF4i tr\u01B0\u1EDDng ti\xEAu chu\u1EA9n <strong><em>local runtime</em></strong> \u0111\u1EC3 b\u1EA1n c\xF3 th\u1EC3 ki\u1EC3m th\u1EED v\xE0 so\xE1t l\u1ED7i ch\u01B0\u01A1ng tr\xECnh m\u1ED9t c\xE1ch tr\u1EF1c quan (v\xED d\u1EE5 nh\u01B0 trong vscode).</li><li>Crate <code>solana-validator</code> cho ph\xE9p s\u1EED d\u1EE5ng <code>solana-test-validator</code> \u0111\u1EC3 ch\u1EA1y c\xE1c b\u01B0\u1EDBc ki\u1EC3m th\u1EED m\u1ED9t c\xE1ch tin c\u1EADy tr\xEAn <strong><em>local validator node</em></strong>. B\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y t\u1EEB tr\xECnh bi\xEAn t\u1EADp <strong><em>tuy nhi\xEAn c\xE1c \u0111i\u1EC3m d\u1EEBng trong ch\u01B0\u01A1ng tr\xECnh s\u1EBD b\u1ECB b\u1ECF qua</em></strong>.</li><li>C\xF4ng c\u1EE5 CLI <code>solana-test-validator</code> gi\xFAp kh\u1EDFi ch\u1EA1y v\xE0 t\u1EA3i Program c\u0169ng nh\u01B0ng th\u1EF1c thi c\xE1c Transaction t\u1EEB Rust CLI ho\u1EB7c t\u1EEB web3js.</li><li>Trong t\u1EA5t c\u1EA3 c\xE1c tr\u01B0\u1EDDng h\u1EE3p tr\xEAn, vi\u1EC7c s\u1EED d\u1EE5ng macro <code>msg!</code> \u0111\u01B0\u1EE3c khuy\u1EBFn kh\xEDch t\u1EA1i th\u1EDDi \u0111i\u1EC3m ph\xE1t tri\u1EC3n ban \u0111\u1EA7u, tuy nhi\xEAn c\u1EA7n xo\xE1 ch\xFAng m\u1ED9t khi \u0111\xE3 ho\xE0n t\u1EA5t ki\u1EC3m th\u1EED. N\xEAn nh\u1EDB r\u1EB1ng <code>msg!</code> c\u0169ng ti\xEAu t\u1ED1n t\xE0i nguy\xEAn t\xEDnh to\xE1n hay c\xF2n g\u1ECDi l\xE0 Compute Units. Program c\u1EE7a b\u1EA1n c\xF3 th\u1EC3 b\u1ECB l\u1ED7i m\u1ED9t khi \u0111\u1EA1t \u0111\u1EBFn gi\u1EDBi h\u1EA1n tr\u1EA7n c\u1EE7a Compute Unit.</li></ul></div><p>Nh\u1EEFng v\xED d\u1EE5 \u1EDF c\xE1c ph\u1EA7n ti\u1EBFp theo s\u1EBD s\u1EED d\u1EE5ng <a href="#resources">solana-program-bpf-template</a>. Vui l\xF2ng t\u1EA3i v\u1EC1 m\xE1y b\u1EB1ng c\xE2u l\u1EC7nh:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:mvines/solana-bpf-program-template.git
<span class="token builtin class-name">cd</span> solana-bpf-program-template
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="moi-truong-kiem-thu-va-soat-loi-trong-trinh-bien-tap" tabindex="-1"><a class="header-anchor" href="#moi-truong-kiem-thu-va-soat-loi-trong-trinh-bien-tap" aria-hidden="true">#</a> M\xF4i tr\u01B0\u1EDDng ki\u1EC3m th\u1EED v\xE0 so\xE1t l\u1ED7i trong tr\xECnh bi\xEAn t\u1EADp</h2><p>M\u1EDF t\u1EC7p <code>src/lib.rs</code></p><p>B\u1EA1n s\u1EBD th\u1EA5y ngay m\u1ED9t Program kh\xE1 \u0111\u01A1n gi\u1EA3n v\xE0 ch\u1EC9 in ra n\u1ED9i d\u1EE5ng nh\u1EADn \u0111\u01B0\u1EE3c t\u1EEB \u0111i\u1EC3m ti\u1EBFp nh\u1EADn ch\u1EC9 th\u1ECB: <code>process_instruction</code></p><ol><li>V\xE0o m\u1EE5c <code>#[cfg(test)]</code> v\xE0 ch\u1ECDn <code>Run Tests</code>. N\xF3 s\u1EBD ch\u1EA1y tr\xECnh bi\xEAn d\u1ECBch sau d\xF3 th\u1EF1c thi b\xE0i ki\u1EC3m th\u1EED <code>async fn test_transaction()</code> ngay sau \u0111\xF3. B\u1EA1n s\u1EBD th\u1EA5y m\u1ED9t th\xF4ng b\xE1o \u0111\u01A1n gian in ra \u1EDF c\u1EEDa s\u1ED5 l\u1EC7nh (Terminal) c\u1EE7a vscode nh\u01B0 d\u01B0\u1EDBi:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
<span class="token string">&quot;bpf_program_template&quot;</span> program loaded as native code
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success
<span class="token builtin class-name">test</span> test::test_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">33</span>.41s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>Thi\u1EBFt l\u1EADp c\xE1c \u0111i\u1EC3m d\u1EEBng t\u1EA1i <code>msg!</code> trong (11) trong ch\u01B0\u01A1ng tr\xECnh</li><li>Quay l\u1EA1i m\xF4-\u0111un ki\u1EC3m th\u1EED, ch\u1ECDn <code>Debug</code> v\xE0 trong kho\u1EA3ng v\xE0i gi\xE2y tr\xECnh so\xE1t l\u1ED7i s\u1EBD d\u1EEBng t\u1EA1i \u0111i\u1EC3m \u0111\xE1nh d\u1EA5u. B\xE2y gi\u1EDD b\u1EA1n c\xF3 th\u1EC3 ki\u1EC3m tra d\u1EEF li\u1EC7u d\u1EA7n c\xE1c h\xE0m, c\xE1c bi\u1EBFn, v\xE2n v\xE2n.</li></ol><p>C\xE1c b\u01B0\u1EDBc ki\u1EC3m th\u1EED c\u0169ng c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c kh\u1EDFi ch\u1EA1y b\u1EB1ng c\xE2u l\u1EC7nh: <code>cargo test</code> ho\u1EB7c <code>cargo test-bpf</code>. T\u1EA5t nhi\xEAn c\xE1c \u0111i\u1EC3m \u0111\xE1nh d\u1EA5u d\u1EEBng s\u1EBD b\u1ECB b\u1ECF qua.</p><p>Ch\xFAc m\u1EEBng b\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh qu\xE1 tr\xECnh ki\u1EC3m th\u1EED v\xE0 s\xE1t l\u1ED7i.</p><div class="custom-container tip"><p class="custom-container-title">L\u01B0u \xFD</p><p>Nh\u1EDB r\u1EB1ng b\u1EA1n \u0111ang d\xF9ng m\u1ED9t n\u1ED1t local (\u0111\u1ECBa ph\u01B0\u01A1ng) validator cho n\xEAn c\xE1c System Program, blockhash, v\xE2n v\xE2n, s\u1EBD kh\xF4ng ph\u1EA3n \xE1nh ho\u1EB7c x\u1EED l\xFD \u0111\xFAng nh\u01B0 tr\xEAn c\xE1c validator thu\u1ED9c m\u1EA1nh ch\xEDnh. \u0110\xF3 l\xE0 l\xFD do t\u1EA1i sao Solana g\u1ECDi ch\xFAng l\xE0 ki\u1EC3m th\u1EED b\u1EB1ng n\u1ED1t Local Validator!</p></div><h2 id="kiem-thu-bang-not-local-validator-trong-trinh-bien-tap" tabindex="-1"><a class="header-anchor" href="#kiem-thu-bang-not-local-validator-trong-trinh-bien-tap" aria-hidden="true">#</a> Ki\u1EC3m th\u1EED b\u1EB1ng n\u1ED1t Local Validator trong tr\xECnh bi\xEAn t\u1EADp</h2><p>C\xE1c t\u1EADp tin khai b\xE1o trong <code>tests/integration.rs</code> s\u1EBD \u0111\u01B0\u1EE3c qu\xE1 tr\xECnh ki\u1EC3m th\u1EED \u0111\u1ECDc v\xE0 t\u1EA3i v\xE0o n\u1ED1t local validator.</p><p>M\u1EB7c \u0111\u1ECBnh, c\xE1c m\u1EABu c\xF3 s\u1EB5n cho vi\u1EC7c t\xEDch h\u1EE3p c\xE1c b\xE0i ki\u1EC3m th\u1EED s\u1EBD ch\u1EC9 c\xF3 th\u1EC3 ch\u1EA1y t\u1EEB c\xE2u l\u1EC7nh <code>cargo test-bpf</code>. C\xE1c b\u01B0\u1EDBc sau \u0111\xE2y s\u1EBD t\xECm hi\u1EC3u c\xE1ch ch\u1EA1y ch\xFAng trong tr\xECnh bi\xEAn t\u1EADp c\u0169ng nh\u01B0 in k\u1EBFt qu\u1EA3 nh\u1EADt k\xFD c\u1EE7a validator v\xE0 l\u1EC7nh in <code>msg!</code> t\u1EEB Program c\u1EE7a b\u1EA1n.</p><ol><li>Trong th\u01B0 m\u1EE5c g\u1ED1c c\u1EE7a d\u1EF1 \xE1n, ch\u1EA1y <code>cargo build-bpf</code> \u0111\u1EC3 bi\xEAn d\u1ECBch ch\u01B0\u01A1ng tr\xECnh m\u1EABu</li><li>Trong tr\xECnh bi\xEAn t\u1EADp, m\u1EDF t\u1EADp tin <code>tests/integration.rs</code></li><li>Chuy\u1EC3n d\xF2ng 1 th\xE0nh c\xE2u nh\u1EADn x\xE9t -&gt; <code>// #![cfg(feature = &quot;test-bpf&quot;)]</code></li><li>\u0110\u1EC3 t\u1EA3i ch\u01B0\u01A1ng tr\xECnh \u0111\xE3 bi\xEAn d\u1ECBch, \u1EDF d\xF2ng 19 thay b\u1EB1ng: <code>.add_program(&quot;target/deploy/bpf_program_template&quot;, program_id)</code></li><li>Th\xEAm c\xE2u l\u1EC7nh sau v\xE0o d\xF2ng 22 <code>solana_logger::setup_with_default(&quot;solana_runtime::message=debug&quot;);</code></li><li>Ch\u1ECDn <code>Run Test</code> ph\xED tr\xEAn h\xE0m <code>test_validator_transaction()</code></li></ol><p>Qu\xE1 tr\xECnh n\xE0y s\u1EBD kh\u1EDFi ch\u1EA1y n\u1ED1t validator sau \u0111\xF3 cho ph\xE9p b\u1EA1n t\u1EA1o m\u1ED9t Transaction (b\u1EB1ng Rust) v\xE0 g\u1EEDi n\xF3 \u0111\u1EBFn n\u1ED1t b\u1EB1ng <code>RcpClient</code>.</p><p>K\u1EBFt qu\u1EA3 \u0111\u1EA7u ra c\u1EE7a ch\u01B0\u01A1ng tr\xECnh s\u1EBD in ra c\u1EEDa s\u1ED5 l\u1EC7nh c\u1EE7a tr\xECnh bi\xEAn t\u1EADp. V\xED d\u1EE5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">1</span><span class="token punctuation">..</span>.
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">2</span><span class="token punctuation">..</span>.
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM consumed <span class="token number">13027</span> of <span class="token number">200000</span> compute <span class="token function">units</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success

<span class="token builtin class-name">test</span> test_validator_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">6</span>.40s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>So\xE1t l\u1ED7i \u1EDF \u0111\xE2y s\u1EBD cho ph\xE9p b\u1EA1n d\xF2 \u0111\u01B0\u1EE3c c\xE1c h\xE0m, ph\u01B0\u01A1ng th\u1EE9c \u0111\xE3 s\u1EED d\u1EE5ng trong <strong><em>n\u1ED9i dung b\xE0i ki\u1EC3m th\u1EED</em></strong> ngo\u1EA1i tr\u1EEB c\xE1c \u0111i\u1EC3m d\u1EEBng \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u trong ch\u01B0\u01A1ng tr\xECnh.</p><p>\u0110i\u1EC1u n\xE0y c\xF3 v\u1EBB l\u1EDDi h\u01A1i phi\u1EC1n nh\u1EC9!</p><h2 id="kiem-thu-bang-not-local-validator-tren-ung-dung-nguoi-dung" tabindex="-1"><a class="header-anchor" href="#kiem-thu-bang-not-local-validator-tren-ung-dung-nguoi-dung" aria-hidden="true">#</a> Ki\u1EC3m th\u1EED b\u1EB1ng n\u1ED1t Local Validator tr\xEAn \u1EE9ng d\u1EE5ng ng\u01B0\u1EDDi d\xF9ng</h2><p>Cu\u1ED1i c\xF9ng, b\u1EA1n c\xF3 th\u1EC3 kh\u1EDFi ch\u1EA1y m\u1ED9t n\u1ED1t local validator v\xE0 t\u1EA3i l\xEAn Program c\u1EE7a b\u1EA1n c\u0169ng nh\u01B0 b\u1EA5t k\u1EF3 Account b\u1EB1ng c\xE2u c\u1EE7a <code>solana-test-validator</code>.</p><p>B\u1EB1ng c\xE1ch n\xE0y, b\u1EA1n s\u1EBD c\u1EA7n m\u1ED9t \u1EE9ng d\u1EE5ng ng\u01B0\u1EDDi d\xF9ng, ho\u1EB7c l\xE0 b\u1EB1ng Rust v\u1EDBi <a href="#resources">RcpClient</a>, ho\u1EB7c l\xE0 b\u1EB1ng <a href="#resources">\u1EE9ng d\u1EE5ng JavaScript/Typescript</a></p><p>Ch\u1EA1y <code>solana-test-validator --help</code> \u0111\u1EC3 hi\u1EC3u th\xEAm v\u1EC1 c\xE1c chi ti\u1EBFt c\u0169ng nh\u01B0 tham s\u1ED1 truy\u1EC1n v\xE0o. V\xED d\u1EE5 b\xEAn d\u01B0\u1EDBi l\xE0 m\u1ED9t c\xE0i \u0111\u1EB7t \u0111\u01A1n gi\u1EA3n nh\u1EA5t:</p><ol><li>M\u1EDF c\u1EEDa s\u1ED5 l\u1EC7nh t\u1EA1i v\u1ECB tr\xED th\u1EED m\u1EE5c g\u1ED1c c\u1EE7a d\u1EF1 \xE1n</li><li>Ch\u1EA1y <code>solana config set -ul</code> \u0111\u1EC3 tr\u1ECF c\xE0i \u0111\u1EB7t v\u1EC1 m\xF4i tr\u01B0\u1EDDng \u0111\u1ECBa ph\u01B0\u01A1ng</li><li>Ch\u1EA1y <code>solana-test-validator --bpf-program target/deploy/bpf_program_template-keypair.json target/deploy/bpf_program_template.so</code></li><li>M\u1EDF m\u1ED9t c\u1EEDa s\u1ED5 l\u1EC7nh kh\xE1c v\xE0 ch\u1EA1y<code>solana logs</code> \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u theo d\xF5i k\u1EBFt qu\u1EA3 tr\u1EA3 ra.</li><li>B\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y \u1EE9ng d\u1EE5ng ng\u01B0\u1EDDi sau \u0111\xF3 v\xE0 quan s\xE1t k\u1EBFt qu\u1EA3 \u0111\u1EA7u ra ch\u1EEDa ch\u01B0\u01A1ng tr\xECnh b\u1EB1ng c\u1EEDa s\u1ED5 l\u1EC7nh \u0111\u01B0\u1EE3c kh\u1EDFi ch\u1EA1y \u1EDF b\u01B0\u1EDBc 4</li></ol><p>Gi\u1EDD \u0111\xE2y b\u1EA1n \u0111\xE3 th\xE0nh th\u1EA1o m\u1ECDi th\u1EE9 r\u1ED3i \u0111\u1EA5y!</p><h2 id="cac-nguon-tai-lieu-khac" tabindex="-1"><a class="header-anchor" href="#cac-nguon-tai-lieu-khac" aria-hidden="true">#</a> <a name="resources"></a> C\xE1c ngu\u1ED3n t\xE0i li\u1EC7u kh\xE1c</h2>`,31),u={href:"https://github.com/mvines/solana-bpf-program-template",target:"_blank",rel:"noopener noreferrer"},d=t("solana-program-bpf-template"),g={href:"https://docs.rs/solana-client/latest/solana_client/rpc_client/struct.RpcClient.html",target:"_blank",rel:"noopener noreferrer"},m=t("RcpClient"),b={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},k=t("JavaScript/Typescript Library");function v(f,y){const a=c("ExternalLinkIcon");return o(),i(r,null,[h,n("p",null,[n("a",u,[d,s(a)])]),n("p",null,[n("a",g,[m,s(a)])]),n("p",null,[n("a",b,[k,s(a)])])],64)}var C=e(p,[["render",v]]);export{C as default};
