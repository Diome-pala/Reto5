package Final.Reto5.Reto5;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Familia Palacio
 */
@Service
public class ServiciosMotorBike {

    @Autowired
    private RepositorioMotorBike metodosCrud;

    public List<MotorBike> getAll() {
        return metodosCrud.getAll();
    }

    public Optional<MotorBike> getmotorbike(int motorbikeId) {
        return metodosCrud.getmotorbike(motorbikeId);//RepositorioMotorBike
    }

    public MotorBike save(MotorBike motorbike) {
        if (motorbike.getId() == null) {
            return metodosCrud.save(motorbike);
        } else {
            Optional<MotorBike> e = metodosCrud.getmotorbike(motorbike.getId());
            if (e.isEmpty()) {
                return metodosCrud.save(motorbike);
            } else {
                return motorbike;
            }
        }
    }

    public MotorBike update(MotorBike motorbike) {
        if (motorbike.getId() != null) {
            Optional<MotorBike> e = metodosCrud.getmotorbike(motorbike.getId());
            if (!e.isEmpty()) {
                if (motorbike.getName() != null) {
                    e.get().setName(motorbike.getName());
                }
                if (motorbike.getBrand() != null) {
                    e.get().setBrand(motorbike.getBrand());
                }
                if (motorbike.getYear() != null) {
                    e.get().setYear(motorbike.getYear());
                }
                if (motorbike.getDescription() != null) {
                    e.get().setDescription(motorbike.getDescription());
                }
                if (motorbike.getCategory() != null) {
                    e.get().setCategory(motorbike.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            } else {
                return motorbike;
            }
        } else {
            return motorbike;
        }
    }

    public boolean deletemotorbike(int motorbikeId) {
        Boolean aBoolean = getmotorbike(motorbikeId).map(motorbike -> { //controlador
            metodosCrud.delete(motorbike);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
