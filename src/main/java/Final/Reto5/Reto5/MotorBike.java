package Final.Reto5.Reto5;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Clase motorbike para el reto 3
 *
 * @author Diomedes Palacio
 * @date 16-10-2021
 * @version 1.0
 */
@Entity
//Tabla motocicleta
@Table(name = "motorbike")
public class MotorBike implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String brand;
    private Integer year;
    private String description;

    /**
     * Relacion de muchos a uno
     */
    @ManyToOne
    /**
     * Agregamos la columna CategoryID de la tabla categoria
     */
    @JoinColumn(name = "categoryId")
    /**
     * Ignorar las propiedades del JSON
     */
    @JsonIgnoreProperties("motorbikes")
    private Categoria category;

    /**
     * Relacion uno a muchos
     */
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "motorbike")
    //Ignorar las propiedades del JSON
    @JsonIgnoreProperties({"motorbike", "client"})
    private List<Mensaje> messages;

    /**
     * Relacion uno a muchos
     */
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "motorbike")
    //Ignorar las propiedades del JSON
    @JsonIgnoreProperties({"motorbike", "client"})
    private List<Reservaciones> reservations;

    /**
     * Obtener el ID de la tabla motorbike de tipo Integer
     *
     * @return el ID
     */
    public Integer getId() {
        return id;
    }

    /**
     * Seteamos el ID de la tabla motorbike de tipo Integer
     *
     * @param id el id tipo integer de motorbike
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Obtener el Nombre de la tabla motorbike de tipo Integer
     *
     * @return el name
     */
    public String getName() {
        return name;
    }

    /**
     * Seteamos el NAME de la tabla motorbike de tipo String
     *
     * @param name el name de tipo cadena de datos de motorbike
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Obtener el BRAND o marca de la tabla motorbike
     *
     * @return el bran de tipo String
     */
    public String getBrand() {
        return brand;
    }

    /**
     * Seteamos el BRAND o marca de la tabla motorbike
     *
     * @param brand el bran de tipo String
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }

    /**
     * Obtener el YEAR de la tabla motorbike
     *
     * @return el year tipo integer
     */
    public Integer getYear() {
        return year;
    }

    /**
     * Seteamos el YEAR o marca de la tabla motorbike
     *
     * @param year el year tipo integer
     */
    public void setYear(Integer year) {
        this.year = year;
    }

    /**
     * Obtener la DESCRIPTION de la tabla motorbike
     *
     * @return la descripcion de tipo String
     */
    public String getDescription() {
        return description;
    }

    /**
     * Seteamos la DESCRIPTION de la tabla motorbike
     *
     * @param description de tipo String
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Obtener la categoria de la tabla category
     *
     * @return la variable category
     */
    public Categoria getCategory() {
        return category;
    }

    /**
     * seteamos la CATEGORY de la tabla category
     *
     * @param category la variable
     */
    public void setCategory(Categoria category) {
        this.category = category;
    }

    /**
     * Obtener el mensaje de la tabla messages
     *
     * @return la variable
     */
    public List<Mensaje> getMessages() {
        return messages;
    }

    /**
     * Seteamos con una lista para los mensajes
     *
     * @param messages la variable
     */
    public void setMessages(List<Mensaje> messages) {
        this.messages = messages;
    }

    /**
     * Obtener la reservacion de la tabla Reservations
     *
     * @return la variable
     */
    public List<Reservaciones> getReservations() {
        return reservations;
    }

    /**
     * Seteamos la lista de reservaciones
     *
     * @param reservations la variable de la tabla Reservations
     */
    public void setReservations(List<Reservaciones> reservations) {
        this.reservations = reservations;
    }

}
