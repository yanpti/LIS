import org.junit.Test;

import static com.codeborne.selenide.Selenide.*;

public class TestName {
    @Test
    public void testGoogle (){
        open ("https://www.google.ru/");
        $x("//*[@id=\"APjFqb\"]").setValue("Петрик Яна").pressEnter();
        sleep(10000);
    }
}
