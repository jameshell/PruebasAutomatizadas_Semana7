import GivenPosts from "./steps/givenPosts";
import {faker} from "@faker-js/faker";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";
import givenPosts from "./steps/givenPosts";

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
function generarPalabras(cantidad = 100, semilla = null) {
    // Aplicar semilla si se proporciona
    if (semilla !== null) {
        faker.seed(semilla);
    }

    let palabras = [];

    // Generar las palabras necesarias
    for (let i = 0; i < cantidad; i++) {
        palabras.push(faker.lorem.word());
    }

    // Unirlas en un string separado por espacios
    return palabras.join(' ');
}

describe("67_post_insert_other_URL_in_content", () => {
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();
    })

    it("67_post_insert_other_URL_in_content", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        const Title1 = generarTexto("title", 60);
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);
        GivenPosts.AndClicksPostContent();
        GivenPosts.AndClickPostEvents();
        GivenPosts.AndScrollOther();
        //GivenPosts.AndClickOther();
        const Url1 = faker.internet.url();
        GivenPosts.AndInputUrlOther(Url1);
        GivenPosts.AndClickPublishPost();
        // Given the user clicks "Continue" in the publishing flow
        GivenPosts.AndClickContinuePublish();
        // Given the user clicks "Publish Right Now" to confirm the publication
        whenPosts.whenclickPostPublishRightNow();
        // Then, verify that the post has been published successfully
        thenPosts.thenVerifyPost();

    });
})