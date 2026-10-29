import { Component } from 'react';
import ErrorPage from '../../pages/error/ErrorPage';

// Intercepte les erreurs d'affichage d'une page et affiche la page d'erreur
// à la place d'un écran blanc. La navbar et le footer restent utilisables.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[IAC] Erreur d\'affichage :', error, info?.componentStack);
  }

  reset() {
    this.setState({ error: null });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage code={500} error={this.state.error} onRetry={this.reset} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
