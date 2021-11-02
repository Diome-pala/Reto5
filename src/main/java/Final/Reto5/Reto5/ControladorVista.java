package Final.Reto5.Reto5;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Familia Palacio
 */
@RequestMapping("/api/index.html")
public class ControladorVista {

    @GetMapping("/index.html")
    public void vista() {
        
    }

}
