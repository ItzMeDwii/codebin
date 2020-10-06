import { Component, Vue } from "vue-property-decorator";
import ThemeChanger from "@/components/ThemeChanger.vue";

@Component({
    name: "Navbar",
    components: {
        ThemeChanger
    }
})

export default class Navbar extends Vue {
    private render(): any {
        return <div id="navbar">
            <nav class="py-0 navbar fixed-top navbar-expand-lg">
                <div class="container">
                    <a
                        class="navbar-brand font-weight-bold text"
                        href="#"
                    >codebin</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-dropdown-animation="on"
                    >
                        <i class="fas fa-bars navtoggler" />
                    </button>
                    <div
                        id="navbarSupportedContent"
                        class="collapse navbar-collapse"
                    >
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <ThemeChanger />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>;
    }
}
