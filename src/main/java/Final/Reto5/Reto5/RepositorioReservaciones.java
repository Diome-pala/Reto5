package Final.Reto5.Reto5;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import paquete_Reto5.ContadorClientes;


/**
 *
 * @author Familia Palacio
 */
@Repository
public class RepositorioReservaciones {

    @Autowired
    private InterfaceReservaciones crud4;

    public List<Reservaciones> getAll() {
        return (List<Reservaciones>) crud4.findAll();
    }

    public Optional<Reservaciones> getReservation(int id) {
        return crud4.findById(id);
    }

    public Reservaciones save(Reservaciones reservation) {
        return crud4.save(reservation);
    }

    public void delete(Reservaciones reservation) {
        crud4.delete(reservation);
    }

    public List<Reservaciones> ReservacionStatus(String Status) {
        return crud4.findAllByStatus(Status);
    }

    public List<Reservaciones> ReservacionTiempo(Date a, Date b) {
        return crud4.findAllByStartDateAfterAndStartDateBefore(a, b);
    }

    public List<ContadorClientes> getTopClientes() {
        List<ContadorClientes> res = new ArrayList<>();
        List<Object[]> report = crud4.countTotalReservationsByClient();
        for (int i = 0; i < report.size(); i++) {
            res.add(new ContadorClientes((Long) report.get(i)[1], (Cliente) report.get(i)[0]));
        }
        return res;
    }
}
