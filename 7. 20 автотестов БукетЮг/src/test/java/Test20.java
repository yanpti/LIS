import com.codeborne.selenide.Condition;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
import static com.codeborne.selenide.Selenide.*;
import com.codeborne.selenide.impl.Plugins;

public class Test20 {
    @Test
    @Order(1)
    public void Test1(){
        open("https://buket-ug.ru/personal/private/");
        $x("/html/body/div[7]/section/div/form/div/div/div[1]/div[2]/input").setValue("test@gmail.com").pressEnter();
        $x("//html/body/div[7]/section/div/form/div/div/div[2]/div[2]/input").setValue("123").pressEnter();
        sleep(500);
    }

    @Test
    @Order(2)
    public void Test2(){
        $x("/html/body/div[7]/section/div/form/div/div/div[1]/div[2]/input").setValue("cimdroid360@gmail.com").pressEnter();
        $x("//html/body/div[7]/section/div/form/div/div/div[2]/div[2]/input").setValue("test123").pressEnter();
        sleep(500);
    }

    @Test
    @Order(3)
    public void Test3(){
        open("https://buket-ug.ru/");
    }


    @Test
    @Order(4)
    public void Test4(){
        $x("/html/body/header/section/div/nav/ul/li[2]/a").click();
        sleep(500);
    }
    @Test
    @Order(5)
    public void Test5(){
        $x("/html/body/header/section/div/nav/ul/li[3]/a").click();
        sleep(500);
    }
    @Test
    @Order(6)
    public void Test6(){
        $x("/html/body/header/section/div/nav/ul/li[4]/a").click();
        sleep(500);
    }
    @Test
    @Order(7)
    public void Test7(){
        $x("/html/body/header/section/div/nav/ul/li[5]/a").click();
        sleep(500);
    }
    @Test
    @Order(8)
    public void Test8(){
        $x("/html/body/header/section/div/nav/ul/li[6]/a").click();
        sleep(500);
    }
    @Test
    @Order(9)
    public void Test9(){
        $x("/html/body/header/section/div/nav/ul/li[7]/a").click();
        sleep(500);
    }
    @Test
    @Order(10)
    public void Test10(){
        open("https://buket-ug.ru/personal/private/");
        $x("/html/body/header/section/div/nav/ul/li[8]/a").click();
        sleep(500);
    }
    @Test
    @Order(11)
    public void Test11(){
        open("https://buket-ug.ru/personal/private/");
        $x("/html/body/header/section/div/nav/ul/li[9]/a").click();
        sleep(500);
    }
    @Test
    @Order(12)
    public void Test12(){
        $x("/html/body/header/section/div/nav/ul/li[10]/a").click();
        sleep(500);
    }
    @Test
    @Order(13)
    public void Test13(){
        $x("/html/body/header/section/div/nav/ul/li[11]/a").click();
        sleep(500);
    }
    @Test
    @Order(14)
    public void Test14(){

        $x("/html/body/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[1]/div[3]").click();
        sleep(500);
        $x("/html/body/div[2]/div/div[3]/div[3]/div[2]/div[2]/div[2]").click();
        sleep(500);
    }
    @Test
    @Order(15)
    public void Test15(){

        $x("/html/body/header/div[1]/div/div[4]/div[1]/div/a/div[2]").click();
        $x("/html/body/header/div[1]/div/div[4]/div[1]/div/div/section/div/form/div/input").setValue("Пионы").pressEnter();
        sleep(500);
    }
    @Test
    @Order(16)
    public void Test16(){

        $x("/html/body/header/section/div/nav/ul/li[1]/a").click();
        sleep(500);
    }
    @Test
    @Order(17)
    public void Test17(){
        $x("/html/body/header/section/div/nav/ul/li[1]/a").click();
        $x("//*[@id=\"bx_1847241719_350\"]/div/a/img").click();
        sleep(500);
    }
    @Test
    @Order(18)
    public void Test18(){
        $x("/html/body/section[3]/div/form/div/div[2]/div/span[1]").click();
        $x("/html/body/section[3]/div/form/div/div[2]/div/ul/li[1]").click();
        $x("/html/body/section[3]/div/form/div/div[2]/div/span[1]").click();
        sleep(500);
    }
    @Test
    @Order(19)
    public void Test19(){
        $x("//*[@id=\"bx_3966226736_12971_7e1b8e3524755c391129a9d7e6f2d206\"]/div/div/div[1]/a/img").click();
        sleep(500);
    }
    @Test
    @Order(20)
    public void Test20(){
        $x("/html/body/section[2]/div/div/div[2]/div[1]/div[2]/a[2]").click();
        sleep(500);
    }
}
