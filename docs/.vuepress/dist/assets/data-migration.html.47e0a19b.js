const e={key:"v-50dcad50",path:"/th/guides/data-migration.html",title:"Migrating Program Data Accounts",lang:"th-TH",frontmatter:{title:"Migrating Program Data Accounts",head:[["meta",{name:"title",content:"\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Solana | Program Accounts Data Migration"}],["meta",{name:"og:title",content:"\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Solana | Program Accounts Data Migration"}],["meta",{name:"description",content:"\u0E42\u0E14\u0E22\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27\u0E01\u0E32\u0E23\u0E17\u0E33 version \u0E43\u0E2B\u0E49 data \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E01\u0E32\u0E23 migration \u0E08\u0E30\u0E2B\u0E21\u0E32\u0E22\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 reference \u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E0B\u0E49\u0E33 (unique) \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E0A\u0E38\u0E14\u0E02\u0E2D\u0E07 data \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48 reference \u0E19\u0E35\u0E49\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E15\u0E32\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23 query,\u0E41\u0E1A\u0E1A ID, \u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E0A\u0E49 datetime identifier. \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23 Serialization \u0E41\u0E25\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Solana."}],["meta",{name:"og:description",content:"\u0E42\u0E14\u0E22\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27\u0E01\u0E32\u0E23\u0E17\u0E33 version \u0E43\u0E2B\u0E49 data \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E01\u0E32\u0E23 migration \u0E08\u0E30\u0E2B\u0E21\u0E32\u0E22\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 reference \u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E0B\u0E49\u0E33 (unique) \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E0A\u0E38\u0E14\u0E02\u0E2D\u0E07 data \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48 reference \u0E19\u0E35\u0E49\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E15\u0E32\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23 query,\u0E41\u0E1A\u0E1A ID, \u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E0A\u0E49 datetime identifier. \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23 Serialization \u0E41\u0E25\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Solana."}],["meta",{name:"og:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"og:image:alt",content:"Solana splash card"}],["meta",{name:"twitter:card",content:"summary"}],["meta",{name:"twitter:site",content:"@solanacookbook"}],["meta",{name:"twitter:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"robots",content:"index,follow,noodp"}],["meta",{name:"googlebot",content:"index,follow"}]],footer:"MIT Licensed"},excerpt:"",headers:[{level:2,title:"\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 migrate program's data accounts \u0E44\u0E14\u0E49\u0E22\u0E31\u0E07\u0E44\u0E07?",slug:"\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16-migrate-program-s-data-accounts-\u0E44\u0E14\u0E49\u0E22\u0E31\u0E07\u0E44\u0E07",children:[]},{level:2,title:"\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C (Scenario)",slug:"\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C-scenario",children:[]},{level:2,title:"Upgrading the Account",slug:"upgrading-the-account",children:[{level:3,title:"1. Add account conversion logic",slug:"_1-add-account-conversion-logic",children:[]}]},{level:2,title:"Resources",slug:"resources",children:[]}],git:{updatedTime:1660787553e3},filePathRelative:"th/guides/data-migration.md"};export{e as data};
