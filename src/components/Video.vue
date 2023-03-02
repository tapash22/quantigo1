<template >
<video-annotation-player :annotations="annotations" @click="onAnnotationAdd" poster="poster">
    <template v-slot:videoContent>
        <source type="video/mp4" src="https://www.dropbox.com/s/xvjem6er1pp1usy/MicrosoftInclusiveHiring.mp4?raw=1">

        <source type="video/webm" src="https://www.dropbox.com/s/bmki1sn54o4m3xt/MicrosoftInclusiveHiring.webm?raw=1">

        <track kind="subtitles" label="subtitle" src="https://www.dropbox.com/s/ipnbojfe0jtz5n7/MicrosoftInclusiveHiringCHT.vtt?raw=1" default>
    </template>
</video-annotation-player>
</template>

<script lang="ts">
import {VideoAnnotationPlayer,Annotation} from 'vue-video-annotation'
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    components: {
        VideoAnnotationPlayer
    },
    setup() {
        let annotations = ref < Annotation[] > ([]);
        let poster: string = 'https://www.google.com/search?q=image&oq=image&aqs=chrome..69i57j69i59j69i60j69i65l3j69i61l2.6400j0j7&sourceid=chrome&ie=UTF-8#';

        const onAnnotationAdd = (annotation: Annotation) => {
            annotations.value.push(annotation);
        }

        return {
            annotations
        }
    }
})
</script>
