import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class Main {

    public static void main(String[] args) {

        try {
            URL unibz = new URL("https://next.unibz.it/en");
            URLConnection connection = unibz.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            String input;
            while((input = in.readLine()) != null ){
                System.out.println(input);
            }

            in.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

        }

    }
}
