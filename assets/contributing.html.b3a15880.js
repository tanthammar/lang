import{_ as l,r as t,o as r,c,a as e,b as s,w as h,F as d,e as n,d as o}from"./app.316f44e8.js";const p={},u=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),n(" Contributing")],-1),_=e("p",null,[n("Contributions are "),e("strong",null,"welcome"),n(" and will be fully "),e("strong",null,"credited"),n(".")],-1),g=n("We accept contributions via Pull Requests on "),m={href:"https://github.com/Laravel-Lang/lang",target:"_blank",rel:"noopener noreferrer"},b=n("Github"),f=n("."),w=e("h2",{id:"how-can-i-add-a-language-in-this-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-can-i-add-a-language-in-this-project","aria-hidden":"true"},"#"),n(" How can I add a language in this project ?")],-1),k=e("li",null,"Fork this repository;",-1),x=n("Make sure you have "),v={href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"},y=n("PHP 8.0"),I=n(" or higher installed on your computer;"),q=e("li",null,[n("Install dependencies by running console command:"),e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"composer"),n(` update
`)])])])],-1),T=n("Call the console command, passing in the argument the name of the localization to be added. Localization code must comply with "),L={href:"https://laravel.com/docs/8.x/localization",target:"_blank",rel:"noopener noreferrer"},P=n("ISO-15897"),E=n(" and "),F={href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank",rel:"noopener noreferrer"},A=n("ISO-639-1"),S=n(" (ex: "),C=e("code",null,"fr",-1),H=n(" for French):"),N=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`php app/add.php fr
`)])],-1),j=o("<li>This command will create all the necessary files and fill them with initial data. The files will be located in the <code>locales/{locale}</code> directory;</li><li>Keep in mind that the <code>*-inline.php</code> files does not come with Laravel and the idea of this file is not to put a specific name to each attribute (as in <code>validation.php</code>) but a generic name for the validation attributes. Therefore in the translations of this file the placeholder <code>:attribute</code> <strong>should not</strong> appear.</li><li>Add a pull request with the name of the language <blockquote><p>ex: [fr] New language</p></blockquote></li>",3),V=e("h2",{id:"how-can-i-fix-a-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-can-i-fix-a-file","aria-hidden":"true"},"#"),n(" How can I fix a file ?")],-1),z=e("ul",null,[e("li",null,"Fork this repository;"),e("li",null,"Update the files;"),e("li",null,[n("Add a pull request with the name of the language "),e("blockquote",null,[e("p",null,"ex: [fr] Update validation for number in validation")])])],-1),B=e("h2",{id:"what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english","aria-hidden":"true"},"#"),n(" What should I do if there is a tag whose translation is the same as in English?")],-1),O=n("In some languages there are some strings whose translation is the same as in English. In this case, the script that generates the "),R=n("status"),W=n(" adds them by default to the list of pending translations. This affects the "),U=e("em",null,"completion status",-1),G=n(" for this language which would never be marked in "),K=e("em",null,"status list",-1),M=n(" with ( \u2714) but with (\u2757) even if all other strings were translated."),D=o(`<p>We can avoid this situation in the following way:</p><ul><li>Fork this repository if you haven&#39;t already;</li><li>Add a PHP file named with the short name of the language (ex: <code>es.php</code> for Spanish) inside the directory <code>excludes</code>;</li><li>This php file must return an array of strings with each of the tags that we must exclude. <blockquote><p>For example suppose that the strings <code>&#39;Email&#39;</code> and <code>&#39;API Token&#39;</code> in <code>es.json</code> (ex: for Spanish) do not need translation in this language and therefore want to exclude them. The PHP file <code>es.php</code> (for example) in <code>excludes</code> should have this structure which you can copy for other languages.</p></blockquote></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token comment">/*
|--------------------------------------------------------------------------
| Exclusion list
|--------------------------------------------------------------------------
|
| This is a list of exclusions for words or phrases where the original
| form of the word has the same spelling in a given language.
|
| This list contains values.
|
*/</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;API Token&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Email&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>Add these changes to the pull request you will send.</li></ul>`,4);function J(Q,X){const a=t("ExternalLinkIcon"),i=t("RouterLink");return r(),c(d,null,[u,_,e("p",null,[g,e("a",m,[b,s(a)]),f]),w,e("ul",null,[k,e("li",null,[x,e("a",v,[y,s(a)]),I]),q,e("li",null,[T,e("a",L,[P,s(a)]),E,e("a",F,[A,s(a)]),S,C,H,N]),j]),V,z,B,e("p",null,[O,s(i,{to:"/status.html"},{default:h(()=>[R]),_:1}),W,U,G,K,M]),D],64)}var Z=l(p,[["render",J],["__file","contributing.html.vue"]]);export{Z as default};
