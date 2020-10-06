import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar";
import "./style.scss";

@Component({
    name: "App",
    components: {
        Navbar
    }
})

export default class App extends Vue {
    private render(): any {
        return <div id="app">
            <div class="container">
                <Navbar />
                <router-view />
            </div>
        </div>;
    }
}
