
<template>
    <div class="page-container bg-[#010101] min-h-screen">
        <canvas width="2000" height="100%" class="fixed top-0 left-0 z-1 transition duration-300 delay-150 !w-full !h-full" :class="splineLoaded ? 'opacity-100' : 'opacity-0'" id="canvas3d"></canvas>
        <div class="absolute top-0 right-0 w-auto flex items-center justify-end p-10 z-[3]">
            <div class="transition duration-300 ease-in-out delay-500" :class="splineLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'">
                <div class="p-4 bg-brandPink rounded-[1.25rem]">
                    <h2 class="text-[1.625rem] large:text-[1.25rem]">Camera states</h2>
                    <div class="flex gap-3 mt-4">
                        <button class="inline-flex items-center border rounded-3xl px-5 py-2.5 font-GTAmericaMedium justify-center text-brandDarkGrey bg-white border-white transition-colors duration-[0.4s] ease-in-out hover:bg-brandGreen hover:border-brandGreen" :class="stage == maxStages ? 'opacity-50 pointer-events-none' : ''" @click="nextStage()">
                            <span>
                                Next stage
                            </span>
                        </button>
                        <button class="inline-flex items-center border rounded-3xl px-5 py-2.5 font-GTAmericaMedium justify-center text-brandDarkGrey bg-white border-white transition-colors duration-[0.4s] ease-in-out hover:bg-brandGreen hover:border-brandGreen" :class="stage == 0 ? 'opacity-50 pointer-events-none': ''" @click="previousStage()">
                            <span>
                                Previous stage
                            </span>
                        </button>
                    </div>
                </div>



                <!-- <div class="p-4 bg-brandPink mt-4 rounded-[1.25rem]">
                    <h2 class="text-[1.625rem] large:text-[1.25rem]">Animations</h2>
                    <div class="flex gap-3 mt-4">
                        <button class="inline-flex items-center border rounded-3xl px-5 py-2.5 font-GTAmericaMedium justify-center text-brandDarkGrey bg-white border-white transition-colors duration-[0.4s] ease-in-out hover:bg-brandGreen hover:border-brandGreen" @click="flipLogo()">
                            <span>
                                Flip logo
                            </span>
                        </button>
                    </div>
                </div> -->
                <div class="p-4 bg-brandPink mt-4 rounded-[1.25rem]">
                    <h2 class="text-[1.625rem] large:text-[1.25rem]">Actions</h2>
                    <div class="flex gap-3 mt-4">
                        <button class="inline-flex items-center border rounded-3xl px-5 py-2.5 font-GTAmericaMedium justify-center text-brandDarkGrey bg-white border-white transition-colors duration-[0.4s] ease-in-out hover:bg-brandGreen hover:border-brandGreen" @click="toggleFloor()">
                            <span v-if="floor">
                                Hide floor
                            </span>
                            <span v-else>
                                Show floor
                            </span>
                        </button>
                        <button class="inline-flex items-center border rounded-3xl px-5 py-2.5 font-GTAmericaMedium justify-center text-brandDarkGrey bg-white border-white transition-colors duration-[0.4s] ease-in-out hover:bg-brandGreen hover:border-brandGreen" @click="switchMaterial()">
                            <span>
                                Switch material
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <div class="fixed top-0 left-0 w-full h-full flex p-12 z-[2]">
            <TransitionGroup>
                <div v-if="stage == 1" :key="1" class="p-8 bg-brandDarkGrey text-white rounded-[1.25rem] max-w-[20rem] self-start absolute">
                    <h2 class="text-[1.625rem] text-brandGreen font-bold large:text-[1.25rem] leading-[1.2]">Example accessible text</h2>
                    <p class="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, lorem nec venenatis eleifend, augue turpis volutpat nisi, nec imperdiet mi nulla a ligula. Suspendisse potenti.</p>
                </div>
                <div v-if="stage == 2" :key="2"  class="p-8 bg-brandDarkGrey text-white rounded-[1.25rem] max-w-[20rem] self-end absolute">
                    <h2 class="text-[1.625rem] text-brandGreen font-bold large:text-[1.5rem leading-[1.2]">Example accessible text for stage 3</h2>
                    <p class="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, lorem nec venenatis eleifend, augue turpis volutpat nisi, nec imperdiet mi nulla a ligula. Suspendisse potenti.</p>
                </div>
                <!-- <div v-if="stage == 3" :key="3"  class="p-8 bg-brandDarkGrey text-white rounded-[1.25rem] max-w-[20rem] self-end absolute right-8">
                    <h2 class="text-[1.625rem] text-brandGreen font-bold large:text-[1.5rem leading-[1.2]">Scroll events</h2>
                    <p class="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, lorem nec venenatis eleifend, augue turpis volutpat nisi, nec imperdiet mi nulla a ligula. Suspendisse potenti.</p>
                </div> -->
            </TransitionGroup>
        </div>
        <div class="fixed top-0 left-0 w-full h-full font-bold px-12 text-white/10 text-center flex items-center justify-center">
            <p class="text-9xl leading-none">
                The proof is in the production®
            </p>
        </div>
      </div>
</template>

<script>
import { Application } from '@splinetool/runtime';
export default {
    name: 'Spline Asset',
    data() {
        return {
            splineLoaded: false,
            stage: 0,
            floor: true,
            material: false,
            maxStages: 3
        }
    },
    methods: {
        loadSpline() {
            const self = this;
            // make sure you have a canvas in the body
            const canvas = document.getElementById('canvas3d');

            // start the application and load the scene
            this.spline = new Application(canvas);
            this.spline.load('https://prod.spline.design/O4qP1FXCh12n3qb1/scene.splinecode').then(() => {
                console.log(this.spline.getVariables());
                this.splineLoaded = true;
            })
        },
        nextStage() {
            if(this.stage !== this.maxStages) {
                this.stage++; 
                this.spline.setVariable('Stage', this.stage);
                console.log(this.spline.getVariables());
            }
        },
        previousStage() {
            if(this.stage !== 0) {
                this.stage--; 
                this.spline.setVariable('Stage', this.stage);
                console.log(this.spline.getVariables());
            }
        },
        toggleFloor() {
            if(this.floor) {
                this.floor = false;
                this.spline.setVariable('Floor', 0);
            } else {
                this.floor = true;
                this.spline.setVariable('Floor', 100);
            }
        },
        flipLogo() {
            console.log('flip logo triggered');
            const obj = this.spline.findObjectByName('NA');
            obj.emitEvent('mouseDown');
        },
        switchMaterial() {
            if(this.material > 0) {
                this.material = false
                this.spline.setVariable('Material', 0);
                console.log(this.spline.getVariables());
            } else {
                this.material = true
                this.spline.setVariable('Material', 100);
                console.log(this.spline.getVariables());
            }
        }
    },
    mounted() {
        this.loadSpline();        
    }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
    