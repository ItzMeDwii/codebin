<template>
  <div class="theme-changer">
            <input  style="display:none;" type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
            <label for='theme-switch' class="nav-link mb-0">
                        <span v-if="darkMode === true">
                            <i class="far fa-moon fa-lg" style="color:#ffffff !important;"></i>
                        </span>
                <span v-else>
                            <i class="fas fa-sun fa-lg" style="color:#000000 !important;"></i>
                        </span>
            </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
    name: "ThemeChanger",
    data() {
        return {
            darkMode: false
        };
    },
    mounted() {
        const htmlElement = document.documentElement;
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            htmlElement.setAttribute("theme", "dark");
            (this as any).darkMode = true;
        } else {
            htmlElement.setAttribute("theme", "light");
            (this as any).darkMode = false;
        }
    },
    watch: {
        darkMode(): void {
            const htmlElement = document.documentElement;
            if ((this as any).darkMode) {
                localStorage.setItem("theme", "dark");
                htmlElement.setAttribute("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
                htmlElement.setAttribute("theme", "light");
            }
        }
    }
})
export default class ThemeChanger extends Vue {}
</script>
