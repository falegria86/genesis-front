import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Alumno } from '@/interfaces/alumnosInterface';
import { format } from 'date-fns';


export const PdfCreate = ({ data }: { data: Alumno }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            position: 'relative',
            minHeight: '100%',
        },
        section: {
            marginBottom: 10,
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 16,
        },
        logo: {
            width: 160,
            height: 'auto',
            marginRight: 10,
        },
        title: {
            fontSize: 10,
            fontWeight: 800,
            textTransform: 'uppercase',
        },
        heading: {
            fontSize: 12,
            marginBottom: 10,
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: '8px 16px',
            width: '100%',
            backgroundColor: '#4b5563',
            color: 'white',
            borderRadius: 999,
            fontWeight: 800,
        },
        text: {
            fontSize: 11,
            marginBottom: 4,
            backgroundColor: '#e5e7eb',
            padding: '8px 16px',
            width: '100%',
            borderRadius: 999,
        },
        signatureSection: {
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        signature: {
            width: '45%',
            textAlign: 'center',
            borderTop: '1px solid black',
            paddingTop: 10,
        },
        signatureLabel: {
            fontSize: 10,
            textTransform: 'uppercase',
        },
        footer: {
            position: 'absolute',
            color: '#374151',
            bottom: 30,
            left: 30,
            right: 30,
            textAlign: 'center',
            fontSize: 9,
            backgroundColor: '#d1d5db',
            padding: '8px',
            fontStyle: 'italic'
        },
        headerInfo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#e5e7eb',
            width: '100%',
            borderRadius: 999,
            padding: '8px 16px'
        },
        headerText: {
            fontSize: 11,
        }
    });

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth();
        const year = date.getUTCFullYear();

        const months = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];

        return `${day} de ${months[month]} ${year}`;
    };

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} src="/genesis-logo.png" />
                    <Text style={styles.title}>Registro de Alumno</Text>
                </View>
                <View style={styles.headerInfo}>
                    <Text style={styles.headerText}>Fecha: {format(new Date, "dd/MM/yyyy")}</Text>
                    <Text style={styles.headerText}>Admisión hecha por:</Text>
                    <Text style={styles.headerText}>Matrícula: {data.matricula}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Datos Generales</Text>
                    <Text style={styles.text}>Nombre completo: {data.nombre.toUpperCase()} {data.ap_paterno.toUpperCase()} {data.ap_materno.toUpperCase()}</Text>
                    <Text style={styles.text}>Fecha de nacimiento: {formatDate(data.fec_nacimiento).toUpperCase()}</Text>
                    <Text style={styles.text}>Sexo: {data.genero?.toUpperCase()}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Información de contacto</Text>
                    <Text style={styles.text}>Email: {data.email}</Text>
                    <Text style={styles.text}>Teléfono: {data.telefono}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Domicilio</Text>
                    <Text style={styles.text}>Calle: {data.calle.toUpperCase()} {data.num_exterior} {data.num_interior}</Text>
                    <Text style={styles.text}>Colonia: {data.colonia.toUpperCase()}</Text>
                    <Text style={styles.text}>Código postal: {data.cp}</Text>
                    <Text style={styles.text}>Municipio: {data.municipio.toUpperCase()}</Text>
                    <Text style={styles.text}>Estado: {data.estado.toUpperCase()}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Información escolar</Text>
                    <Text style={styles.text}>Curso/Carrera: {data.carrera.split('_').join(' ').toUpperCase()}</Text>
                </View>
                <View style={styles.signatureSection}>
                    <View style={styles.signature}>
                        <Text style={styles.signatureLabel}>Firma del asesor</Text>
                    </View>
                    <View style={styles.signature}>
                        <Text style={styles.signatureLabel}>Firma del alumno</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text>Génesis Centro de Capacitación en Cultura de Belleza - Av. Veracruz 189 Planta Alta, Col. Centro, Xalisco, Nayarit</Text>
                </View>
            </Page>
        </Document>
    );
};
