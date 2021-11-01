package Final.Reto5.Reto5;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Familia Palacio
 */
@RestController
@RequestMapping("/api/Motorbike")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class ControladorMotorBike {

    @Autowired
    private ServiciosMotorBike servicio;

    @GetMapping("/all")
    public List<MotorBike> getmotorbike() {
        return servicio.getAll();
    }

    @GetMapping("/{id}")
    public Optional<MotorBike> getmotorbike(@PathVariable("id") int motorbikeId) {
        return servicio.getmotorbike(motorbikeId);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public MotorBike save(@RequestBody MotorBike motorbike) {
        return servicio.save(motorbike);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public MotorBike update(@RequestBody MotorBike motorbike) {
        return servicio.update(motorbike);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int motorbikeId) {
        return servicio.deletemotorbike(motorbikeId);
    }
}
