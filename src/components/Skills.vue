<script setup></script>

<template>
    <div class="section">
        <h1>Skills</h1>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi recusandae provident iusto tenetur veritatis quae cupiditate quibusdam est odio obcaecati, repudiandae numquam iste, reprehenderit nemo vero iure. Sunt, labore!</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi recusandae provident iusto tenetur veritatis quae cupiditate quibusdam est odio obcaecati, repudiandae numquam iste, reprehenderit nemo vero iure. Sunt, labore!</li>
    </div>
</template>

<style scoped>

h1{
    color: var(--secondary);
}

.section{
    background-color: var(--primary);
    margin: 25px 0 0 0;
    padding: 5px 25px 0 25px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 60px);
    height: fit-content;
}

@media (prefers-color-scheme: light){
    .section{
        color: var(--background);
    }
}
</style>