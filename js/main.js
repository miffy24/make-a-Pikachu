!function(){
    var duration=50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed =$button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
            }
        })
    

    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id 
        id= setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn&&fn.call()
            }
        },duration)
    }
    let code = `
        /*
         * 首先画皮卡丘的皮
         */
        .preview{
            height: 100%;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFE600;
        }
        .wrapper{
            height: 165px;
            width: 100%;
            position: relative;
        }
        /*
         * 接下来画皮卡丘的鼻子
         */
        .nose{
            width:0;
            height: 0;
            border-style: solid;
            border-color:black transparent transparent;
            position: absolute;
            left: 50%;
            top: 28px;
            border-width: 12px;
            border-radius: 11px;
            margin-left: -12px;
        
        }
        /*
         * 接着画皮卡丘的眼睛
         */
        .eye{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #1D1F20;
            border: 2px solid #000;
            position: absolute;
        }
        .eye::before{
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background: #fff;
            position: absolute;
            border-radius: 50%;
            border: 2px solid #000;
            left: 6px;
            top: 1px;
        }
        .eye.left{
            right: 50%;
            margin-right: 90px;
        }
        .eye.right{
            left: 50%;
            margin-left: 90px;
        }
        /*
         * 接着皮卡丘的脸
         */
        .face{
            width: 68px;
            height: 68px;
            background: #FF0000;
            border-radius: 50%;
            border: 2px solid #000;
            position: absolute;
            top: 85px;
        }
        .face.left{
            right: 50%;
            margin-right: 116px;
        }
        .face.right{
            left: 50%;
            margin-left: 116px;
        }
        /*
         * 接着，画皮卡丘的上嘴唇
         */
        .upperLip{
            height: 25px;
            width: 80px;
            border: 2px solid #000;
            position: absolute;
            top: 50px;
            background: #FFE600;
        
        }
        .upperLip.left{
            right: 50%;
            border-bottom-left-radius: 40px 25px;
            border-top: none;
            border-right: none;
            transform: rotate(-15deg);
        }
        .upperLip.right{
            left: 50%;
            border-bottom-right-radius: 40px 25px;
            border-top: none;
            border-left: none;
            transform: rotate(15deg);
        }
        /*
         * 皮卡丘的下嘴唇
         */
        .lowerLip-wrapper{
            bottom: 0;
            position: absolute;
            left: 50%;
            margin-left: -150px;
            height: 110px;
            overflow: hidden;
            width: 300px;
            
        }
        .lowerLip{
            height: 3500px;
            width:300px;
            background: #9B000A;
            border-radius: 200px/2000px;
            border: 2px solid #000;
            position: absolute;
            bottom:0;
            overflow: hidden;        
        }
        /*
         * 皮卡丘的小舌头
         */
        .lowerLip::after{
            content: '';
            position: absolute;
            bottom:-20px;
            width: 100px;
            height: 100px;
            left: 50%;
            background: #FF485F;
            margin-left: -50px;
            border-radius: 50px;
        }
        /*
        * 好了，皮卡丘完成了
        */
    `
    writeCode('',code)
}.call()