<template lang="pug">
.block.w-full.rounded-md.border-2.border-gray-500.m-4
    div.p-4.divide-y.divide-gray-200
        div.p-1
            slot(name="head")
        div.pl-4.pt-4
            slot(name="body")
</template>
