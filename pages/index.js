export default function HomeScreen() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            fontSize: '4rem',
            fontFamily: 'Impact',
            
          }}>
            Home <br/><br/> <a style={{color: '#0070f3',
            textDecoration: 'none', }} href="/api/og?message=Hello, World!">▶️ Gerar imagem </a>  
        </div>
    )
}