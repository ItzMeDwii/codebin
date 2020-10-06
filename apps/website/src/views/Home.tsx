import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "Home"
})

export default class Home extends Vue {
    private render(): any {
        return <div id="home">
            <h1></h1>
        </div>;
    }
}
