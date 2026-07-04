import { useEffect, useState } from 'react'

function App() {
  const [balance, setBalance] = useState(20000)
  const [loadingAd, setLoadingAd] = useState(false)

  const watchAd = () => {
    setLoadingAd(true)

    setTimeout(() => {
      setBalance(prev => prev + 1500)
      alert(`✅ +1500 монет добавлено!\nНовый баланс: ${balance + 1500}`)
      setLoadingAd(false)
    }, 1500)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #6b21a8, #4c1d95)',
      color: 'white',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', paddingTop: '40px' }}>
        
        <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '8px' }}>
          💰 My Earn App
        </h1>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '40px 20px',
          borderRadius: '24px',
          textAlign: 'center',
          margin: '30px 0',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{ margin: '0 0 8px 0', opacity: 0.9 }}>Твой баланс</p>
          <p style={{ fontSize: '52px', fontWeight: 'bold', margin: '0' }}>
            {balance.toLocaleString()}
          </p>
          <p style={{ marginTop: '4px' }}>монет</p>
        </div>

        <button 
          onClick={watchAd}
          disabled={loadingAd}
          style={{
            width: '100%',
            padding: '22px',
            fontSize: '20px',
            background: 'linear-gradient(to right, #ec4899, #a855f7)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {loadingAd ? '⏳ Показываем рекламу...' : '👀 Посмотреть рекламу (+1500)'}
        </button>

      </div>
    </div>
  )
}

export default App