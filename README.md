# CNPhase2
![](https://i.imgur.com/ydzopQ6.png)

- 前端：HTML + CSS + JS, 跟使用者互動
     - CSS : HTML的格式設定
- 後端：server, node.js

[JS](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript)  
[HTML+CSS+JS留言板](https://ithelp.ithome.com.tw/users/20129687/ironman/3230?page=1)  
[JS留言板](https://www.796t.com/article.php?id=254449)  
[NodeJS安裝](https://kinsta.com/blog/how-to-install-node-js/)  
[JS Module(require相關)](https://miahsuwork.medium.com/%E7%AC%AC%E4%B8%89%E9%80%B1-node-js-%E5%9F%BA%E7%A4%8E-module-exports-%E5%92%8C-require-2f9f6915d9f0)
## Git
- git push -u origin Message
     - 等同 git push --set-upstream origin Message
     - 把本地的分支設定成去追蹤遠端的分支，這樣以後在 Message 這個分支就只要 git pull/git push
     - [reference](https://zlargon.gitbooks.io/git-tutorial/content/remote/upstream.html)
- git pull origin Message
     - origin 是遠端，這個指令可以把遠端 branch Message 的檔案同步到本機
- HEAD : 目前指向的版本(node)     
     - [reference](https://gitbook.tw/chapters/using-git/what-is-head)
- Fast Forward : 在同一條分支上面快轉，把目前的 HEAD 指向更前面的 node
- git reset : merge 失敗或做錯事的時候把本地的 git HEAD 移到某個地方，常用有 HEAD~k(往後k個)或用commit ID找回之前的檔案
     - [reference](https://www.maxlist.xyz/2020/05/03/git-reset-checkout/)
     
