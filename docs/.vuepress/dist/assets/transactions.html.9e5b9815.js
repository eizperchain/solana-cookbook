import{_ as r,r as a,o as i,c,a as e,b as n,w as l,F as d,d as t,e as h}from"./app.28f6b3e6.js";const u={},f=e("h1",{id:"transactions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transactions","aria-hidden":"true"},"#"),t(" Transactions")],-1),_=t("Clients can invoke "),p=t("programs"),m=t(" by submitting a transaction to a cluster. A single transaction can include multiple instructions, each targeting its own program. When a transaction is submitted, the Solana "),b={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},g=t("Runtime"),y=t(" will process its instructions in order and atomically. If any part of an instruction fails, the entire transaction will fail."),k=h('<h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Instructions are the most basic operational unit on Solana</li><li>Each instruction contains: <ul><li>The <code>program_id</code> of the intended program</li><li>An array of all <code>accounts</code> it intends to read from or write to</li><li>An <code>instruction_data</code> byte array that is specific to the intended program</li></ul></li><li>Multiple instructions can be bundled into a single transaction</li><li>Each transaction contains: <ul><li>An array of all <code>accounts</code> it intends to read from or write to</li><li>One or more <code>instructions</code></li><li>A recent <code>blockhash</code></li><li>One or more <code>signatures</code></li></ul></li><li>Instructions are processed in order and atomically</li><li>If any part of an instruction fails, the entire transaction fails.</li><li>Transactions are limited to 1232 bytes</li></ul></div><h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>The Solana Runtime requires both instructions and transactions to specify a list of all accounts they intended to read from or write to. By requiring these accounts in advance, the runtime is able to parallelize execution across all transactions.</p><p>When a transaction is submitted to a cluster, the runtime will process its instructions in order and atomically. For each instruction, the receiving program will interpret its data array and operate on its specified accounts. The program will either return successfully or with an error code. If an error is returned, the entire transaction will fail immediately.</p><p>Any transaction that aims to debit an account or modify its data requires the signature of its account holder. Any account that will be modified is marked as <code>writable</code>. An account can be credited without the holder\u2019s permission so long as the transaction fee payer covers the necessary rent and transaction fees.</p>',6),w=t("Before submission, all transactions must reference a "),v={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},T=t("recent blockhash"),x=t(". The blockhash is used to prevent duplications and eliminate stale transactions. The max age of a transaction's blockhash is 150 blocks, or about ~1 minute 19 seconds as of the time of this writing."),A=e("h3",{id:"fees",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fees","aria-hidden":"true"},"#"),t(" Fees")],-1),S=e("p",null,"The Solana network collects two types of fees:",-1),I={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},F=t("Transaction fees"),R=t(" for propagating transactions (aka \u201Cgas fees\u201D)"),q={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},B=t("Rent fees"),E=t(" for storing data on-chain"),L=e("p",null,[t("In Solana, transaction fees are deterministic: there is no concept of a fee market in which users can pay higher fees to increase their chances of being included in the next block. At the time of this writing, transaction fees are determined only by the number of signatures required (i.e. "),e("code",null,"lamports_per_signature"),t("), not by the amount of resources used. This is because there is currently a hard cap of 1232 bytes on all transactions.")],-1),O=e("p",null,[t("All transactions require at least one "),e("code",null,"writable"),t(" account to sign the transaction. Once submitted, the writable signer account that is serialized first will be the fee payer. This account will pay for the cost of the transaction regardless of whether the transaction succeeds or fails. If the fee payer does not have a sufficient balance to pay the transaction fee, the transaction will be dropped.")],-1),D=e("p",null,"At the time of this writing, 50% of all transaction fees are collected by the validator that produces the block, while the remaining 50% are burned. This structure works to incentivize validators to process as many transactions as possible during their slots in the leader schedule.",-1),N=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),t(" Other Resources")],-1),V={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},z=t("Official Documentation"),C={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},j=t("Transaction Structure"),J={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},M=t("Transaction Fees by Justin Starry"),W={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},H=t("An Introduction to Solana by Hana"),P={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},G=t("Transaction Processing by Jito Labs"),K={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},Q=t("Solana Transaction in Depth by Alex Miller");function U(X,Y){const s=a("RouterLink"),o=a("ExternalLinkIcon");return i(),c(d,null,[f,e("p",null,[_,n(s,{to:"/core-concepts/programs.html"},{default:l(()=>[p]),_:1}),m,e("a",b,[g,n(o)]),y]),k,e("p",null,[w,e("a",v,[T,n(o)]),x]),A,S,e("ul",null,[e("li",null,[e("a",I,[F,n(o)]),R]),e("li",null,[e("a",q,[B,n(o)]),E])]),L,O,D,N,e("ul",null,[e("li",null,[e("a",V,[z,n(o)])]),e("li",null,[e("a",C,[j,n(o)])]),e("li",null,[e("a",J,[M,n(o)])]),e("li",null,[e("a",W,[H,n(o)])]),e("li",null,[e("a",P,[G,n(o)])]),e("li",null,[e("a",K,[Q,n(o)])])])],64)}var $=r(u,[["render",U]]);export{$ as default};
