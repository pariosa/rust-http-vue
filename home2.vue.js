var spahome2 = Vue.component("Home2", {
    template: `
    <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3">Welcome to the Second Page</h3>
                    <span class="subheading">Call to action</span>
                    <v-divider class="my-3"></v-divider>
                    <div class="title mb-3">Even More Features!</div>
                    <v-btn large color="primary" router-link to="/" class="mx-0">go back</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
  `,
    props: ["title"],
    $_veeValidate: {
        validator: "new"
    }
});