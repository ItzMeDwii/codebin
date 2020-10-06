import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "About"
})

export default class About extends Vue {
    private render(): any {
        return <div id="about">
            <h1>aaaa</h1>
        </div>;
    }
}
