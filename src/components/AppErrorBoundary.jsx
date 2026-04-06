import React from 'react'

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App runtime error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 16,
            margin: 16,
            border: '1px solid #e06d6d',
            borderRadius: 16,
            background: '#2a1717',
            color: '#fff',
            whiteSpace: 'pre-wrap',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Runtime error</h2>
          <div>{String(this.state.error)}</div>
        </div>
      )
    }

    return this.props.children
  }
}
