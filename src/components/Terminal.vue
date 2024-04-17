<script setup>
import { onMounted, ref } from 'vue';

const activeLine = ref(1);

onMounted(()=>{
    let command = document.getElementById('command');
    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');

    const commandText = command.innerText.slice(command.innerText.indexOf('.'));
    const output1Text = output1.innerText;
    const output2Text = output2.innerText;

    command.innerText = command.innerText.slice(0, command.innerText.indexOf('.'));
    output1.innerText = '';
    output2.innerText = '';

    setTimeout(()=>{
        let count = 0;
        const interval = setInterval(()=>{
            command.innerText = command.innerText + commandText.charAt(count)
            count++;
            if(count === commandText.length) clearInterval(interval);
        }, 125)

        // output 1
        setTimeout(()=>{
            output1.innerText = output1Text
        }, 1350)
        
        // output 2
        setTimeout(()=>{
            output2.innerText = output2Text;
        }, 1650)

        setTimeout(()=>{
            activeLine.value = 2;
        }, 1750);
    }, 500)
});
</script>

<template>
    <div class="terminal">
        <div class="terminal-toolbar">
            <div class="butt">
                <div class="btn btn-color"></div>
                <div class="btn"></div>
                <div class="btn"></div>
            </div>
            <p class="user">ryancrooks@admin: ~</p>
            <div class="add-tab">+</div>
        </div>

        <div class="terminal-body">
            <div class="terminal-prompt">
                <span class="terminal-user">ryancrooks@admin:</span>
                <span class="terminal-location">~</span>
                <span class="terminal-bling" id="command">$ &nbsp&nbsp ./Welcome</span>
                <span class="terminal-cursor" v-if="activeLine == 1"></span>
            </div>
            <div class="output">
                <h2 id="output1">Hi, I'm Ryan</h2>
                <h3 id="output2">A senior at Penn State and incoming data science analyst at BNY Mellon</h3>
            </div>
            <div class="terminal-prompt" v-if="activeLine==2">
                <span class="terminal-user">ryancrooks@admin:</span>
                <span class="terminal-location">~</span>
                <span class="terminal-bling" id="command">$</span>
                <span class="terminal-cursor" id="cursor1"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.terminal{
    width: 25rem;
    height: 17.5rem;
}

.terminal-toolbar{
    display: flex;
    height: 2rem;
    width: 100%;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #212121;
    justify-content: space-between;
}

.butt{
    display: flex;
    align-items: center;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
}

.btn-color{
    background: #ee411a;
}

.btn:hover{
    cursor: pointer;
}

.btn:focus{
    outline: none;
}

.add-tab{
    border: 1px solid #fff;
    color: #fff;
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
}

.user{
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
}

.terminal-body {
    background: rgba(0, 0, 0, 0.8);
    height: calc(100% - 30px);
    padding-top: 2px;
    margin-top: -1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.terminal-prompt {
    display: flex;
}

.terminal-prompt span{
    margin-left: 0.25rem;
}

.terminal-user{
    color: #1eff8e;
}

.terminal-location{
    color: #4878c0;
}

.terminal-bling{
    color: #dddddd;
}

.terminal-cursor{
    display: block;
    height: 1rem;
    width: 0.25rem;
    margin-top: .25rem;
    margin-left: 0.825rem;
    animation: curbl 1200ms linear infinite;
}

@keyframes curbl {
    0% {
        background: #ffffff;
    }

    49% {
        background: #ffffff;
    }

    60% {
        background: transparent;
    }

    99% {
        background: transparent;
    }

    100% {
        background: #ffffff;
    }
}

.output{
    padding: 0 4px;
}

.output h2{
    margin: 0;
}

@media (prefers-color-scheme: light){
    h2, h3{
        color: var(--background);
    }
}
</style>
