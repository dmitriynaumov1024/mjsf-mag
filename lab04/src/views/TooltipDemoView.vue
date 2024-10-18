<script lang="ts">
import { tooltipDirective } from "@/directives/tooltip"

export default {
    directives: {
        tooltip: tooltipDirective
    },
    data() {
        return {
            pos: { x: 0, y: 0 }
        }
    },
    methods: {
        onMouseMove(e) {
            this.pos.x = e.offsetX
            this.pos.y = e.offsetY
        }
    }
}

</script>

<template>
    <main class="container mx-auto p-6">

        <h1 class="text-2xl font-bold mb-4 text-gray-800">
            Tooltip demo
        </h1>

        <div class="mb-8">
            <code class="oneline">
                v-tooltip="{ text: 'hello world', delay: 100, condition: ['hover'], position: ['right'], align: 'center' }"
            </code>
            <p>
                <span v-tooltip="{ text: 'hello world', delay: 100, condition: ['hover'], position: ['right'], align: 'center' }">
                    Hover over this paragraph to see a "hello world" tooltip with 100ms delay.
                </span>
            </p>
        </div>

        <div class="mb-8">
            <code class="oneline">
                v-tooltip="{ text: '&lt;i>LMAO&lt;/i>', html: true, delay: 800, condition: ['click'] }"
            </code>
            <p v-tooltip="{ text: '<i>LMAO</i>', html: true, delay: 800, condition: ['click'] }">
                Click on this paragraph to see a "<i>LMAO</i>" tooltip with 800ms delay.
            </p>
        </div>

        <div class="mb-8">
            <code class="oneline">
                v-tooltip="{ text: '&lt;u>oops!&lt;/u>', html: true, condition: ['focus'], position: 'bottom', align: 'end' }"
            </code>
            <p>Focus on this text field to see a "<u>oops!</u>" tooltip.</p>
            <input type="text" v-tooltip="{ text: '<u>oops!</u>', html: true, condition: ['focus'], position: 'bottom', align: 'end' }"/>
        </div>

        <div class="mb-16">
            <code class="oneline">
                v-tooltip="{ text: '&copy; Dmytro Naumov', html: true, condition: ['always'], position: 'bottom', align: 'start' }"
            </code>
            <p v-tooltip="{ text: '&copy; Dmytro Naumov', html: true, condition: ['always'], position: 'bottom', align: 'start' }">
                This "&copy; Dmytro Naumov" tooltip will always be visible.
            </p>
        </div>

        <div class="mb-8">
            <code class="oneline">
                v-tooltip="{ text: 'eee', condition: ['hover'], position: ['pointer'] }"
            </code>
            <div class="mb-1" style="width: 20rem; height: 20rem; background-color: #fefebe;" 
                @mousemove="this.onMouseMove"
                v-tooltip="{ text: 'eee', condition: ['hover'], position: ['pointer'] }">
                Move your pointer over this element
            </div>
            <p>Pointer position inside the element: ({{this.pos.x}}, {{this.pos.y}})</p>
        </div>

    </main>
</template>