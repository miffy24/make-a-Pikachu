# make-a-Pikachu
1. 先做出皮卡丘的静态页面。
2. 再通过pre标签，异步和回调将代码和样式同步展示出来
3. 遇到个bug，皮卡丘下嘴唇覆盖了上嘴唇
    -  可以通过
    ```css
    .wrapper>:not(:last-child){
                z-index:1;
            }
    ```           
        
    - 也可以直接根据文档流原理，将html中的下嘴唇提到最上边。
4. 添加button，可以进行调速
5. setInterval改不了速度，用setTimeout模拟(setTimeout只调用一次)