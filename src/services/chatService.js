// Chat Service for ARBY AI Assistant
// Supports Grok (xAI) API with mock fallback

class ChatService {
  constructor() {
    this.apiKey = process.env.REACT_APP_GROK_API_KEY;
    this.baseURL = 'https://api.x.ai/v1';
    this.useMock = !this.apiKey; // Use mock if no API key available
  }

  // Main method to send message and get response
  async sendMessage(messages, userMessage) {
    try {
      if (this.useMock) {
        return await this.getMockResponse(userMessage);
      } else {
        return await this.getGrokResponse(messages, userMessage);
      }
    } catch (error) {
      console.error('Chat service error:', error);
      return this.getErrorResponse();
    }
  }

  // Grok API integration
  async getGrokResponse(messages, userMessage) {
    const conversationHistory = [
      {
        role: 'system',
        content: 'You are ARBY, an AI Analytics Assistant specializing in KPI analysis, data insights, and business intelligence. Provide helpful, concise responses focused on analytics and data-driven solutions.'
      },
      ...messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      {
        role: 'user',
        content: userMessage
      }
    ];

    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: conversationHistory,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Grok API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.choices[0]?.message?.content || 'I apologize, but I could not generate a response.'
    };
  }

  // Mock response service for when API is unavailable
  async getMockResponse(userMessage) {
    // Simulate network delay
    await this.delay(1500 + Math.random() * 1000);

    const mockResponses = {
      // KPI Analysis responses
      kpi: [
        "Based on your KPI data, I notice some interesting trends. Your conversion rate has improved by 15% this quarter, but customer acquisition cost is trending upward.",
        "I've analyzed your KPIs and found that while revenue is growing, profit margins are declining. Let me help you identify the key drivers.",
        "Your KPI dashboard shows strong performance in user engagement metrics. However, I recommend focusing on retention rates for sustained growth."
      ],
      
      // Trend analysis responses
      trend: [
        "The trends show a seasonal pattern in your data. Q4 typically sees 30% higher performance, which aligns with your current trajectory.",
        "I've identified three key trends: increasing mobile usage, declining desktop traffic, and growing social media referrals.",
        "Your trend analysis reveals a strong upward momentum. The 12-week moving average suggests continued growth."
      ],
      
      // Report generation responses
      report: [
        "I'll generate a comprehensive report including executive summary, key findings, and actionable recommendations. This will take about 2 minutes.",
        "Your report is being prepared with the latest data insights. I'll include comparative analysis with industry benchmarks.",
        "Generating your analytics report now. It will include trend visualizations, performance metrics, and strategic recommendations."
      ],
      
      // Risk assessment responses
      risk: [
        "I've identified 3 at-risk items: declining customer satisfaction scores, increasing churn rate in premium segment, and supply chain delays.",
        "Risk analysis complete. Your main concerns are market volatility impact and competitive pressure in your primary segment.",
        "Based on current data patterns, I recommend immediate attention to inventory management and customer retention strategies."
      ],

      // General responses
      general: [
        "I'm here to help with your analytics needs. What specific insights are you looking for?",
        "As your AI Analytics Assistant, I can help analyze trends, generate reports, and provide data-driven recommendations.",
        "I'm analyzing your request. Could you provide more context about the specific metrics you'd like to explore?",
        "Let me help you uncover actionable insights from your data. What would you like to focus on?",
        "I'm ARBY, your analytics companion. I can assist with KPI analysis, trend identification, and strategic planning."
      ]
    };

    // Simple keyword matching for contextual responses
    const message = userMessage.toLowerCase();
    let responseType = 'general';

    if (message.includes('kpi') || message.includes('performance') || message.includes('metric')) {
      responseType = 'kpi';
    } else if (message.includes('trend') || message.includes('pattern') || message.includes('forecast')) {
      responseType = 'trend';
    } else if (message.includes('report') || message.includes('summary') || message.includes('generate')) {
      responseType = 'report';
    } else if (message.includes('risk') || message.includes('problem') || message.includes('issue')) {
      responseType = 'risk';
    }

    const responses = mockResponses[responseType];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return {
      success: true,
      message: randomResponse
    };
  }

  // Error fallback response
  getErrorResponse() {
    return {
      success: false,
      message: "I'm experiencing technical difficulties right now. Please try again in a moment, or contact support if the issue persists."
    };
  }

  // Utility method for delays
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Check if service is using mock or real API
  isUsingMock() {
    return this.useMock;
  }

  // Get service status for debugging
  getServiceInfo() {
    return {
      usingMock: this.useMock,
      hasApiKey: !!this.apiKey,
      baseURL: this.baseURL
    };
  }
}

// Export singleton instance
export default new ChatService();