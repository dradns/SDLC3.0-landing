import { Terminal, Folder, Settings, Search, GitBranch } from "lucide-react";

const VSCodeMockup = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-card border border-card-border rounded-lg overflow-hidden shadow-custom-lg">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-2">sdlc-project</span>
        </div>
        <div className="text-xs text-muted-foreground">SDLC 3.0 - AI Development Workflow</div>
      </div>

      <div className="flex h-96">
        {/* Sidebar */}
        <div className="w-16 bg-accent flex flex-col items-center py-4 gap-4">
          <Folder className="w-6 h-6 text-accent-foreground" />
          <Search className="w-6 h-6 text-accent-foreground opacity-60" />
          <GitBranch className="w-6 h-6 text-accent-foreground opacity-60" />
          <Terminal className="w-6 h-6 text-accent-foreground opacity-60" />
          <Settings className="w-6 h-6 text-accent-foreground opacity-60" />
        </div>

        {/* File Explorer */}
        <div className="w-64 bg-muted border-r border-border">
          <div className="p-3 border-b border-border">
            <div className="text-xs font-medium text-foreground uppercase tracking-wider">Explorer</div>
          </div>
          <div className="p-2 text-sm">
            <div className="flex items-center gap-2 py-1 text-muted-foreground">
              <span className="text-xs">▼</span>
              <span>src</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center gap-2 py-1 text-muted-foreground">
                <span className="text-xs">📄</span>
                <span>main.py</span>
              </div>
              <div className="flex items-center gap-2 py-1 text-primary font-medium">
                <span className="text-xs">📄</span>
                <span>sdlc_workflow.py</span>
              </div>
              <div className="flex items-center gap-2 py-1 text-muted-foreground">
                <span className="text-xs">📄</span>
                <span>ai_assistant.py</span>
              </div>
              <div className="flex items-center gap-2 py-1 text-muted-foreground">
                <span className="text-xs">📄</span>
                <span>deployment.py</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 bg-card">
          <div className="flex items-center bg-muted border-b border-border">
            <div className="bg-card px-4 py-2 border-r border-border text-sm">
              sdlc_workflow.py
            </div>
          </div>
          <div className="p-4 font-mono text-sm space-y-2">
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">1</span>
              <span className="text-purple-600">class</span>
              <span className="text-foreground"> SDLCWorkflow:</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">2</span>
              <span className="text-muted-foreground">    """AI-powered SDLC 3.0 implementation"""</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">3</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">4</span>
              <span className="text-purple-600">    def</span>
              <span className="text-blue-600"> analyze_requirements</span>
              <span className="text-foreground">(self, input_data):</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">5</span>
              <span className="text-muted-foreground">        # AI анализирует требования</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">6</span>
              <span className="text-purple-600">        return</span>
              <span className="text-foreground"> self.ai_assistant.process(input_data)</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">7</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">8</span>
              <span className="text-purple-600">    def</span>
              <span className="text-blue-600"> generate_code</span>
              <span className="text-foreground">(self, requirements):</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">9</span>
              <span className="text-muted-foreground">        # Генерация кода с AI</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">10</span>
              <span className="text-foreground">        code = self.ai_assistant.generate(requirements)</span>
            </div>
            <div className="flex">
              <span className="text-muted-foreground mr-4 w-8 text-right">11</span>
              <span className="text-purple-600">        return</span>
              <span className="text-foreground"> self.optimize_code(code)</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-muted border-l border-border">
          <div className="p-3 border-b border-border">
            <div className="text-xs font-medium text-foreground uppercase tracking-wider">AI Assistant</div>
          </div>
          <div className="p-4 space-y-3 text-sm">
            <div className="bg-card p-3 rounded border">
              <div className="text-primary font-medium mb-2">Анализ кода</div>
              <div className="text-muted-foreground text-xs">
                ✅ Функция analyze_requirements оптимизирована<br/>
                ⚡ Предлагаю добавить кэширование<br/>
                📊 Покрытие тестами: 85%
              </div>
            </div>
            <div className="bg-card p-3 rounded border">
              <div className="text-primary font-medium mb-2">Предложения</div>
              <div className="text-muted-foreground text-xs">
                • Добавить обработку ошибок<br/>
                • Использовать async/await<br/>
                • Добавить логирование
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeMockup;