import GivenPosts from "./steps/givenPosts";
import {faker} from "@faker-js/faker";
import ThenPosts from "./steps/thenPosts";

function generarTexto(tipo = "title", longitud = 255, semilla = null) {
    // Aplicar semilla si se proporciona
    if (semilla !== null) {
        faker.seed(semilla);
    }

    let texto = "";

    if (tipo === "title") {
        texto = faker.lorem.sentence(50); // Generar un título base
    } else if (tipo === "description") {
        texto = faker.lorem.paragraphs(5); // Generar un párrafo base
    } else {
        throw new Error("El tipo debe ser 'title' o 'description'.");
    }

    // Ajustar la longitud del texto al valor especificado
    if (texto.length > longitud) {
        return texto.substring(0, longitud).trim();
    } else {
        while (texto.length < longitud) {
            texto += " " + faker.lorem.word();
        }
        return texto.substring(0, longitud).trim();
    }
}

describe("62_post_excerpt_301_caracteres", () => {
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();

        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
    })

    it("62_post_excerpt_301_caracteres", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        const Title=generarTexto("title",150);
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title);

        GivenPosts.AndClickSettingsPost();

        GivenPosts.AndClickExcerptPost();

        const Excerpt=generarTexto("description",301);
        GivenPosts.AndFillExcerptPost(Excerpt);

        GivenPosts.AndClickSettingsPost();

        // Given the user clicks the "Publish" button to initiate the publishing flow
        GivenPosts.AndClickPublishPost();

        ThenPosts.thenShouldAlertExcerpt();
    });
})