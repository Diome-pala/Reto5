package Final.Reto5.Reto5;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import paquete_Reto5.ContadorClientes;
import paquete_Reto5.StatusReservas;

/**
 *
 * @author Familia Palacio
 */
@Service
public class ServiciosReservaciones {

    @Autowired
    /**
     * se crean los servicios metodo crud
     *
     * @author Diomedes palacio
     */
    private RepositorioReservaciones metodosCrud;

    /**
     * Se hace el llamado a toda la base metodo crud
     *
     * @author Diomedes palacio
     */
    public List<Reservaciones> getAll() {
        return metodosCrud.getAll();
    }

    /**
     * Se muestran las reservaciones
     *
     * @author Diomedes palacio
     */
    public Optional<Reservaciones> getReservation(int reservationId) {
        return metodosCrud.getReservation(reservationId);
    }

    /**
     * Se guardan las reservaciones
     *
     * @author Diomedes palacio
     */
    public Reservaciones save(Reservaciones reservation) {
        if (reservation.getIdReservation() == null) {
            return metodosCrud.save(reservation);
        } else {
            Optional<Reservaciones> e = metodosCrud.getReservation(reservation.getIdReservation());
            if (e.isEmpty()) {
                return metodosCrud.save(reservation);
            } else {
                return reservation;
            }
        }
    }

    /**
     * Se actualizan las reservaciones
     *
     * @author Diomedes palacio
     */
    public Reservaciones update(Reservaciones reservation) {
        if (reservation.getIdReservation() != null) {
            Optional<Reservaciones> e = metodosCrud.getReservation(reservation.getIdReservation());
            if (!e.isEmpty()) {

                if (reservation.getStartDate() != null) {
                    e.get().setStartDate(reservation.getStartDate());
                }
                if (reservation.getDevolutionDate() != null) {
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if (reservation.getStatus() != null) {
                    e.get().setStatus(reservation.getStatus());
                }
                metodosCrud.save(e.get());
                return e.get();
            } else {
                return reservation;
            }
        } else {
            return reservation;
        }
    }

    /**
     * Se elimina un areservacion
     *
     * @author Diomedes palacio
     */
    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }

    /**
     * Se llaman los reportes
     *
     * @author Diomedes palacio
     */
    public StatusReservas getReporteStatusReservaciones() {
        List<Reservaciones> completed = metodosCrud.ReservacionStatus("completed");
        List<Reservaciones> cancelled = metodosCrud.ReservacionStatus("cancelled");
        return new StatusReservas(completed.size(), cancelled.size());
    }

    /**
     * Se genera el reporte de tiempo
     *
     * @author Diomedes palacio
     */
    public List<Reservaciones> getReporteTiempoReservaciones(String datoA, String datoB) {
        SimpleDateFormat parser = new SimpleDateFormat("yyy-MM-dd");
        Date datoUno = new Date();
        Date datoDos = new Date();

        try {
            datoUno = parser.parse(datoA);
            datoDos = parser.parse(datoB);
        } catch (ParseException evt) {
            evt.printStackTrace();
        }
        if (datoUno.before(datoDos)) {
            return metodosCrud.ReservacionTiempo(datoUno, datoDos);
        } else {
            return new ArrayList<>();
        }
    }

    /**
     * Se genera el conteo de clientes
     *
     * @author Diomedes palacio
     */
    public List<ContadorClientes> servicioTopCLientes() {
        return metodosCrud.getTopClientes();
    }
}
