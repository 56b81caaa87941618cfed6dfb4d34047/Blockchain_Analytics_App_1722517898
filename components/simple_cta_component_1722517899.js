/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722517899", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 relative overflow-hidden">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6 relative z-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-xl p-8 shadow-xl">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Stay Ahead of the Blockchain Curve</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white text-opacity-80 md:text-lg">Our powerful analytics engine dissects new blockchain data in real-time.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-70 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Analyze Blockchain Data Now</a>
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full filter blur-xl opacity-50"></div>
            <div class="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full filter blur-xl opacity-50"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full filter blur-xl opacity-30"></div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
