package Final.Reto5.Reto5;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Familia Palacio
 */
public interface InterfaceReservaciones extends CrudRepository<Reservaciones, Integer> {

    public List<Reservaciones> findAllByStatus(String Status);

    public List<Reservaciones> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);

    // Consulta query metodo
    @Query("SELECT c.client, COUNT(c.client) from Reservaciones AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC")
    public List<Object[]> countTotalReservationsByClient();
}
