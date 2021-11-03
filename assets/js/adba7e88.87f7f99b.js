"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6867],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={},s="Lockups",c={unversionedId:"Getting Started/near-token/lockups",id:"Getting Started/near-token/lockups",isDocsHomePage:!1,title:"Lockups",description:"These docs include information about lockups in general, how they are implemented on NEAR, some challenges this causes, and how you can delegate your locked tokens.",source:"@site/docs/Getting Started/near-token/lockups.md",sourceDirName:"Getting Started/near-token",slug:"/Getting Started/near-token/lockups",permalink:"/docs/Getting Started/near-token/lockups",editUrl:"https://github.com/near/wiki/edit/main/wiki/docs/Getting Started/near-token/lockups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NEAR Token",permalink:"/docs/Getting Started/near-token/README"},next:{title:"Token Balance",permalink:"/docs/Getting Started/near-token/token-balance"}},u=[{value:"Lockup Basics",id:"lockup-basics",children:[],level:2},{value:"The Lockup Contract at NEAR",id:"the-lockup-contract-at-near",children:[{value:"Lockup",id:"lockup",children:[],level:3},{value:"Vesting",id:"vesting",children:[],level:3},{value:"Combinations",id:"combinations",children:[],level:3},{value:"Termination of vesting",id:"termination-of-vesting",children:[],level:3},{value:"An Example",id:"an-example",children:[],level:3}],level:2},{value:"Delegating locked tokens",id:"delegating-locked-tokens",children:[],level:2},{value:"Calling Arbitrary Methods",id:"calling-arbitrary-methods",children:[{value:"Example: Transferring staking reward tokens from the lockup",id:"example-transferring-staking-reward-tokens-from-the-lockup",children:[{value:"Step 1: Transfer Unlock Ping",id:"step-1-transfer-unlock-ping",children:[],level:4},{value:"Step 2: Refresh the staking pool balance",id:"step-2-refresh-the-staking-pool-balance",children:[],level:4},{value:"Step 3: Transfer the tokens",id:"step-3-transfer-the-tokens",children:[],level:4}],level:3}],level:2},{value:"Frequent questions?",id:"frequent-questions",children:[{value:"I don&#39;t see my full balance in my wallet",id:"i-dont-see-my-full-balance-in-my-wallet",children:[],level:3},{value:"How do I delegate locked-up tokens?",id:"how-do-i-delegate-locked-up-tokens",children:[],level:3},{value:"If I have a lockup, what do I need to do to transfer my tokens once they are available from the Wallet?",id:"if-i-have-a-lockup-what-do-i-need-to-do-to-transfer-my-tokens-once-they-are-available-from-the-wallet",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lockups"},"Lockups"),(0,r.kt)("p",null,"These docs include information about lockups in general, how they are implemented on NEAR, some challenges this causes, and how you can delegate your locked tokens."),(0,r.kt)("h2",{id:"lockup-basics"},"Lockup Basics"),(0,r.kt)("p",null,'A "lockup" is when tokens are prevented from being transferred. The configuration of this lockup may vary significantly from case to case, but the same smart contract is used for each of them. Accounts that are subject to a lockup have a different setup than accounts that are created without a lockup. If you have a locked-up account, it may be supported slightly differently by various tools (from wallets to delegation interfaces) because of this difference in the architecture.\\\nIf you want to be sure to see the correct balances, use ',(0,r.kt)("a",{parentName:"p",href:"https://wallet.near.org"},"NEAR official wallet"),"."),(0,r.kt)("p",null,"The most common configuration of lockup is to linearly release the tokens for transfer during the entire term of the lockup. For example, a 24-month linear lockup would make a small amount of tokens eligible for transfer with each block that passes until the full amount is free to transfer at the end of 24 months."),(0,r.kt)("p",null,'Another factor in lockups is the "cliff", which means that no tokens are unlocked until that date (often 12 months after the lockup start).\\\nOn that date, a large chunk of tokens is unlocked at once to make it as if the cliff never existed at all.\\\nMost early accounts are subject to a cliff. For example, a 4-year linear lockup with a 1-year cliff will have the following characteristics:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Months 0-12: all tokens are locked"),(0,r.kt)("li",{parentName:"ol"},"Month 12+1 block: the first 25% of the tokens are immediately unlocked"),(0,r.kt)("li",{parentName:"ol"},"Months 13-48: the remaining 75% of tokens are unlocked smoothly over each block of the remaining 36 months."),(0,r.kt)("li",{parentName:"ol"},"Months 48+: all tokens are unlocked")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See how NEAR tokens have been distributed and what lockups generally apply in "),(0,r.kt)("a",{parentName:"p",href:"https://near.org/blog/near-token-supply-and-distribution/"},(0,r.kt)("em",{parentName:"a"},"this post")),(0,r.kt)("em",{parentName:"p"},".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See the FAQ at the end for questions")),(0,r.kt)("h2",{id:"the-lockup-contract-at-near"},"The Lockup Contract at NEAR"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/core-contracts/tree/master/lockup"},"Lockup")," is a special smart contract that ensures that the full, or the partial amount is not transferable until it is supposed to be."),(0,r.kt)("p",null,"The lockups are implemented as a separate smart contract from your main account. Thus, if you have received tokens prior to ",(0,r.kt)("a",{parentName:"p",href:"https://near.org/blog/near-mainnet-phase-2-unrestricted-decentralized/"},"Phase II"),", you will get two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'A regular account (also called "Owner Account" in context of lockups), let\'s say ',(0,r.kt)("inlineCode",{parentName:"li"},"user.near")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"3e52c197feb13fa457dddd102f6af299a5b63465e324784b22aaa7544a7d55fb"),";"),(0,r.kt)("li",{parentName:"ol"},"A lockup contract, with a name like ",(0,r.kt)("inlineCode",{parentName:"li"},"4336aba00d32a1b91d313c81e8544ea1fdc67284.lockup.near"),".")),(0,r.kt)("p",null,"The owner account is created first, either by following the NEAR Drop process or by creating a new key pair using Trust, Ledger, or another wallet."),(0,r.kt)("p",null,"The lockup contract is then deployed with a predictable name. It is defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"hash(owner_account_id)[:20]")," encoded in ",(0,r.kt)("inlineCode",{parentName:"p"},"hex")," and deployed as subaccount under ",(0,r.kt)("inlineCode",{parentName:"p"},"lockup.near"),". It means that all lockup contracts are deployed to the accounts named with ",(0,r.kt)("inlineCode",{parentName:"p"},".lockup.near")," at the end."),(0,r.kt)("p",null,"If you have received additional tokens to the lockup account, they are considered unlocked and can be freely withdrawn. For example, any rewards that are earned using this lockup account (e.g. from delegation) or any other funds sent to this lockup contract can be withdrawn by the owner at any time."),(0,r.kt)("p",null,"The actual lockup release process happens on per block basis. E.g. if the release length is 1 calendar year, it will actually be ",(0,r.kt)("inlineCode",{parentName:"p"},"31,536,000")," seconds, and with ","~","1-second blocks, ",(0,r.kt)("inlineCode",{parentName:"p"},"~1/31,536,000")," will be released per block. When the lockup has been fully released, the Owner Account can add the full-access key and withdraw all the funds from it."),(0,r.kt)("p",null,"The contract consists of lockup and vesting processes that go simultaneously. Both of these processes lock the tokens, but the mechanics slightly differ."),(0,r.kt)("h3",{id:"lockup"},"Lockup"),(0,r.kt)("p",null,"Lockup mechanics have 2 configurable parameters: 1. ",(0,r.kt)("inlineCode",{parentName:"p"},"lockup_timestamp")," - The moment when tokens start linearly unlocking; 2. ",(0,r.kt)("inlineCode",{parentName:"p"},"release_duration")," - The length of the unlocking schedule during which tokens are linearly unlocked. By the end of this duration, all tokens are unlocked."),(0,r.kt)("p",null,"The lockup process could not be terminated. Lockup does not have a cliff."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9140).Z})),(0,r.kt)("p",null,"[","deprecated] Apart from the lockup timestamp, there is a lockup duration. ",(0,r.kt)("inlineCode",{parentName:"p"},"lockup_duration")," is the interval between ",(0,r.kt)("a",{parentName:"p",href:"https://near.org/blog/near-mainnet-phase-2-unrestricted-decentralized/"},"the Phase II launch")," (October 13th) and the moment when tokens start to unlock."),(0,r.kt)("h3",{id:"vesting"},"Vesting"),(0,r.kt)("p",null,"Vesting also locks the tokens, and it allows configuring 2 more options: 1. Ability to terminate tokens vesting and refund non-vested tokens back. 2. Cliff vesting period."),(0,r.kt)("p",null,"Vesting process includes 3 timestamps: ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cliff_date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end_date"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1480).Z})),(0,r.kt)("h3",{id:"combinations"},"Combinations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v_start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v_cliff"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v_end")," are the aliases for vesting parameters; ",(0,r.kt)("inlineCode",{parentName:"p"},"l_start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"l_end")," are for lockup parameters. They could be easily transformed into initializing parameters described above."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(954).Z})),(0,r.kt)("p",null,"The liquid tokens balance is always the minimum between unlocked and vested values."),(0,r.kt)("h3",{id:"termination-of-vesting"},"Termination of vesting"),(0,r.kt)("p",null,"Vesting could be terminated by the foundation, an account configured at the moment of initializing the contract. It's important to understand how the termination works combining with the lockup schedule."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5660).Z})),(0,r.kt)("p",null,"At the moment of termination, we stop the vesting process, so the vested amount is going to remain constant after that; the lockup process keeps going and will unlock the tokens on its schedule. We continue to unlock the tokens as we normally do that by getting the minimum between unlocked and vested amounts."),(0,r.kt)("h3",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"You can see examples of account and lockup setups in the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org"},"NEAR Explorer"),".\\\nFor example, this randomly chosen account ",(0,r.kt)("inlineCode",{parentName:"p"},"gio3gio.near")," was created in several steps:"),(0,r.kt)("p",null,"First, the Owner Account ",(0,r.kt)("inlineCode",{parentName:"p"},"gio3gio.near")," was created and configured using several transactions, which you can see in ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/accounts/gio3gio.near"},"the account history"),". It was created with 40 NEAR tokens to pay for the storage requirements of the account, and the two-factor authentication that is deployed to it."),(0,r.kt)("p",null,"Next, the account ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/accounts/9b84742f269952cea2877425b5e9d2e15cae8829.lockup.near"},"9b84742f269952cea2877425b5e9d2e15cae8829.lockup.near")," was created to store the actual balance of locked tokens on the account in ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.mainnet.near.org/transactions/Eer14Fih17TRjpiF8PwWfVKNTB57vXnNJsDW93iqc2Ui"},"a batch transaction")," which also transferred these tokens to it (in this case, 594.11765 tokens).\\\nYou can see the arguments for the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method in the explorer, which show a 12-month release duration with an initial cliff of October 4th:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner_account_id": "gio3gio.near",        // the Owner account who is allowed to call methods on this one\n  "lockup_duration": "0",                    // not necessary if the lockup_timestamp is used\n  "lockup_timestamp": "1601769600000000000", // Unix timestamp for October 4th, 2020 at midnight UTC\n  "transfers_information": {\n    "TransfersDisabled": {\n      "transfer_poll_account_id": "transfer-vote.near"\n    }\n  },\n  "vesting_schedule": null,\n  "release_duration": "31536000000000000",  // 365 days\n  "staking_pool_whitelist_account_id": "lockup-whitelist.near",\n  "foundation_account_id": null\n}\n')),(0,r.kt)("p",null,"For the actual lockup contract code and README, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/core-contracts/tree/master/lockup"},"see it on Github"),"."),(0,r.kt)("h2",{id:"delegating-locked-tokens"},"Delegating locked tokens"),(0,r.kt)("p",null,"One of the unique features of the NEAR lockups is the ability to delegate tokens while they are still locked."),(0,r.kt)("p",null,"There are few things to know: 1. You can only delegate to whitelisted pools, right now it's all the pools that end with ",(0,r.kt)("inlineCode",{parentName:"p"},".poolv1.near"),'. 2. One lockup contract can only delegate to a single pool. 3. The account must keep a minimum balance of 3.5 $NEAR to cover storage for the lockup contract itself (transactions that will try to withdraw over that amount will just fail). 4. Delegation rewards can be withdrawn back to the lockup contract but are unlocked, so they can be withdrawn from it right away. 5. Delegating commands/tools which are not specifically configured to work with locked-up accounts won\'t work, as the "owner account" must call lockup contract. Currently, Dokia and NEAR Wallet are adding native support for lockup contract delegation.'),(0,r.kt)("h2",{id:"calling-arbitrary-methods"},"Calling Arbitrary Methods"),(0,r.kt)("p",null,"Calling methods on the lockup contract is a bit more complicated than doing so on a normal contract because you will need to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"accountId"),' option as well, which references the "owner" account for that lockup contract.\\\nThis is because the lockup contract isn\'t designed to do anything on its own; its methods need to be called from the perspective of the account which owns it.'),(0,r.kt)("p",null,"Methods must be called using one of two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"near view ..."),": these are simpler and don't modify anything or cost anything"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"near call ..."),": these do require more arguments and require gas")),(0,r.kt)("p",null,"Arguments are passed using a hash with string arguments inside single quotes, for example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'near call some_lockup some_method \'{"arg1": "value1", "arg2": "value2"}\' --accountId=lockup_owner_account')),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/core-contracts/tree/master/lockup"},"lockup github README")," for the documentation and the examples."),(0,r.kt)("h3",{id:"example-transferring-staking-reward-tokens-from-the-lockup"},"Example: Transferring staking reward tokens from the lockup"),(0,r.kt)("p",null,"To illustrate a common case of calling lockup methods with arguments, this is an example of transferring NEAR tokens that were earned from staking out of a lockup contract and into another arbitrary account. We assume the following have already occurred:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The tokens were unstaked from the pool (which takes a 4-epoch waiting period) using ",(0,r.kt)("inlineCode",{parentName:"li"},"unstake")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"unstake_all"),";"),(0,r.kt)("li",{parentName:"ol"},"The tokens were withdrawn from the pool to the lockup contract.")),(0,r.kt)("p",null,'For more information (or examples) on either of these steps, click on the "Token Delegation" link in the docs navigation above.'),(0,r.kt)("p",null,"Now that the staking rewards are in your account, it requires several steps to transfer them out because some values need to be manually updated in the contracts."),(0,r.kt)("p",null,"The following steps will show how functions are called in the lockup contract while helping to illustrate a common use case. Of course, to simply transfer tokens that are already unlocked (not staking rewards), then skip to step 3."),(0,r.kt)("h4",{id:"step-1-transfer-unlock-ping"},"Step 1: Transfer Unlock Ping"),(0,r.kt)("p",null,"Start by pinging the lockup contract to tell it that transfers are unlocked. This ",(0,r.kt)("em",{parentName:"p"},"only needs to be done once total"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# replace some_lockup.lockup.near and lockup_owner.near with the appropriate accounts\nnear call some_lockup.lockup.near check_transfers_vote '{}' --accountId=lockup_owner.near --gas=75000000000000 --useLedgerKey=\"44'/397'/0'/0'/1'\"\n")),(0,r.kt)("p",null,"If you forget to do this, you might get an error like ",(0,r.kt)("inlineCode",{parentName:"p"},"panicked at 'Transfers are disabled', src/internal.rs:68:9"),"."),(0,r.kt)("h4",{id:"step-2-refresh-the-staking-pool-balance"},"Step 2: Refresh the staking pool balance"),(0,r.kt)("p",null,"Next, refresh the staking pool balance, so the lockup understands that you aren't trying to withdraw tokens beyond the amount which should still be locked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near call some_lockup.lockup.near refresh_staking_pool_balance '{}' --accountId=lockup_owner.near --gas=75000000000000 --useLedgerKey=\"44'/397'/0'/0'/1'\"\n")),(0,r.kt)("p",null,"If you forget to do this, you might get an error like ",(0,r.kt)("inlineCode",{parentName:"p"},"panicked at 'The available liquid balance \" 123456789 is smaller than the requested transfer amount 100000000000000000000000000"),"."),(0,r.kt)("h4",{id:"step-3-transfer-the-tokens"},"Step 3: Transfer the tokens"),(0,r.kt)("p",null,"Transfer 100 NEAR from ",(0,r.kt)("inlineCode",{parentName:"p"},"some_lockup.near")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"some_recipient.near"),". Remember that, to be transferable, the tokens must either be unlocked or staking rewards earned on top of the locked balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call some_lockup.lockup.near transfer \'{"receiver_id": "some_recipient.near", "amount": "100000000000000000000000000"}\' --accountId=lockup_owner.near --gas=50000000000000 --useLedgerKey="44\'/397\'/0\'/0\'/1\'"\n')),(0,r.kt)("p",null,'If you forget to use the large amount of yoctoNEAR (e.g. you wrote "1.5" instead of "1500000000000000000000000"), you might get an error like ',(0,r.kt)("inlineCode",{parentName:"p"},"panicked at 'Failed to deserialize input from JSON.: Error(\"invalid digit found in string\", line: 1, column: 17)'")),(0,r.kt)("h2",{id:"frequent-questions"},"Frequent questions?"),(0,r.kt)("h3",{id:"i-dont-see-my-full-balance-in-my-wallet"},"I don't see my full balance in my wallet"),(0,r.kt)("p",null,"Not all wallets support looking up the locked-up balance."),(0,r.kt)("p",null,"There are three ways to go:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://wallet.near.org"},"NEAR official wallet"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Getting%20Started/near-token/token-custody#importing-accounts-from-other-wallets"},"Import your account into NEAR Wallet"),"; "),(0,r.kt)("li",{parentName:"ul"},"Use CLI to check your balance: ",(0,r.kt)("inlineCode",{parentName:"li"},"near view <LOCKUP_ACCOUNT_ID> get_balance ''")," (note it outputs the value in yoctoNEAR - divide by 10e24 to get NEAR amount).")),(0,r.kt)("h3",{id:"how-do-i-delegate-locked-up-tokens"},"How do I delegate locked-up tokens?"),(0,r.kt)("p",null,"It's important to note, that a single lockup contract can only delegate to a single validator."),(0,r.kt)("p",null,"Go to Dokia's staking UI: ",(0,r.kt)("a",{parentName:"p",href:"https://staking.dokia.cloud/staking/near/validators"},"https://staking.dokia.cloud/staking/near/validators")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the validator you want to delegate;"),(0,r.kt)("li",{parentName:"ol"},"Choose either to do it via Web Interface or CLI;"),(0,r.kt)("li",{parentName:"ol"},"With NEAR Wallet or Ledger you can use Web Interface;"),(0,r.kt)("li",{parentName:"ol"},"To use CLI, make sure you have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/near-cli"},"near-cli")," installed and either use Ledger, have seed phrase, or have secret key locally.")),(0,r.kt)("h3",{id:"if-i-have-a-lockup-what-do-i-need-to-do-to-transfer-my-tokens-once-they-are-available-from-the-wallet"},"If I have a lockup, what do I need to do to transfer my tokens once they are available from the Wallet?"),(0,r.kt)("p",null,'If you use NEAR Wallet, you can just spend them as normal. You will just have to confirm a couple of extra transactions ("check vote" and "transfer").\\\nOther wallets may implement this differently.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Got a question?  ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/nearprotocol"},"Ask it on StackOverflow!"))))}d.isMDXComponent=!0},9140:function(e,t,n){t.Z=n.p+"assets/images/lockup_1-6767e999b2dca254b3f3979f8982ed12-6767e999b2dca254b3f3979f8982ed12.png"},1480:function(e,t,n){t.Z=n.p+"assets/images/lockup_2-33c47004e711b0c2d836f96a7d4b93e5-33c47004e711b0c2d836f96a7d4b93e5.png"},954:function(e,t,n){t.Z=n.p+"assets/images/lockup_3-c7f2d633dc7b496f27d23b3c2ec4e392-c7f2d633dc7b496f27d23b3c2ec4e392.png"},5660:function(e,t,n){t.Z=n.p+"assets/images/lockup_4-f036005bf997b396c630370ee3d14a31-f036005bf997b396c630370ee3d14a31.png"}}]);